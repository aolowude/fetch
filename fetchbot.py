# Importing required packages
import streamlit as st
import openai

st.title("Fetch")
st.sidebar.header("Instructions")
st.sidebar.info(
    '''Ask about possible things like:
    Meal options
    Weight loss plans
    Food items food for pregnancy
       '''
    )

    # Set the model engine and your OpenAI API key
model_engine = "text-davinci-003"
openai.api_key = "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" #follow step 4 to get a secret_key

def ChatGPT(user_query):
    ''' 
    This function uses the OpenAI API to generate a response to the given 
    user_query using the ChatGPT model
    '''
    # Use the OpenAI API to generate a response
    completion = openai.Completion.create(
                                  engine = model_engine,
                                  prompt = user_query,
                                  max_tokens = 1024,
                                  n = 1,
                                  temperature = 0.5,
                                      )
    response = completion.choices[0].text
    return response

def main():
    '''
    This function gets the user input, pass it to ChatGPT function and 
    displays the response
    '''
    # Get user input
    user_query = st.text_input("What would you like me to Fetch? :q", "What foods are good for weight loss?")
    if user_query != ":q" or user_query != "":
        # Pass the query to the ChatGPT function
        response = ChatGPT(user_query)
        return st.write(f"{user_query} {response}")

        # call the main function
main() 

