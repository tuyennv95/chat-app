import { Avatar } from "@mui/material"
import { useRecipient } from "../hooks/useRecipient"

type Props = ReturnType<typeof useRecipient>


const RecipientAvatar = ({recipient, recipientEmail}:Props) => {
    // console.log(recipient, recipientEmail)
    return recipient?.photoUrl ? <Avatar src={recipient.photoUrl} /> : <Avatar>{recipientEmail && recipientEmail[0].toUpperCase()}</Avatar>
  
}

export default RecipientAvatar