import json
import os
from openai import OpenAI
from dotenv import load_dotenv

def add_content_to_info(text_content, tag, title):
    os.chdir(os.path.dirname(__file__))
    # Load existing data from info.json
    if not os.path.exists('info.json'):
        with open('info.json', 'w') as file:
            json.dump([], file)
    with open('info.json', 'r') as file:
        data = json.load(file)

    # Add the new content with an extra tag for user 'tester'
    data.append({
        'content': text_content,
        'tag': tag,
        'user': 'tester',
        'title': title
    })

    # Write the updated data back to info.json
    with open('info.json', 'w') as file:
        json.dump(data, file)

def create_content(tag, repititions=1):

    client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

    conversation = [
            {"role": "system", "content": "You are creating a text post about" + tag + ". It doesn't have to be perfect, just write something that is relevant to the topic. Keep your message to 280 characters or less and no special formatting."},
        ]

    for i in range(repititions):
        conversation.append(
            {
                "role": "user",
                "content": "Create another social media text post about " + tag + ". Vary your message & title, the style, the words, and the topic from what was mentioned before. Mention things that are part of" + tag + ". Keep you message to 280 characters or less. The format should be \'Title:\' [title] followed by \'Post\': [post]."
            }
        )
        
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=conversation
        )
        
        message = completion.choices[0].message.content.split('Post:')[1].strip()
        title = completion.choices[0].message.content.split('Title:')[1].split('Post:')[0].strip().replace('\n', '')
        
        # add the system response to info.json
        print('\n')
        print(completion.choices[0].message.content)
        add_content_to_info(message, tag, title)
        # clearly print the response and add spacing
        
        
        
    

if __name__ == '__main__':
    load_dotenv()
    create_content("travel", 20)
    create_content("cars", 20)
    create_content("programming", 20)
    create_content("market", 20)
    create_content("photography", 20)
    create_content("miscellaneous", 20)
    
    