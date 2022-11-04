import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';
import { getRecipientEmail } from './../utils/getRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { Conversation,AppUser } from './../types/index';
export const useRecipient = (conversationUser: Conversation['users']) => {
    const [loggedInUser] = useAuthState(auth)
    // getEmail
    const recipientEmail = getRecipientEmail(conversationUser, loggedInUser)
    // getAvatar 
    const queryGetRecipient = query(collection(db, 'users'), where('email', '==', recipientEmail))

    const [recipientsSnapshot] = useCollection(queryGetRecipient)

    const recipient = recipientsSnapshot?.docs[0]?.data() as AppUser | undefined

    return {
        recipient,
        recipientEmail
    }
}