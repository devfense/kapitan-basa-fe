export const sanitizeServerMessage = (message: string | string[]): string => {

    let santizedMessage = "";

    if(message.constructor === String){
        if(message.search('student_id') >= 0 && message.search('exists') >= 0){
            santizedMessage = 'Student ID is already taken'
        } else if (message.search('username') >= 0 && message.search('exists') >= 0){
            santizedMessage = 'Username is already taken'
        }
        else if (message.search('email_address') >= 0 && message.search('exists') >= 0){
            santizedMessage = 'Email address is already taken' 
        }
        else {
            santizedMessage = message
        }
    } else if(message.constructor === Array) {
        santizedMessage = message.join(', ')
    }



    return santizedMessage
}