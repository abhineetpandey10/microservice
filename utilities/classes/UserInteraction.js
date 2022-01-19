class UserInteraction
{
    
    static likeRecorded(contentID, userID)
    {
        return `Content ${contentID} liked by User ${userID}`
    }

    static likeRemoved(contentID, userID)
    {
        return `User ${userID}'s Like removed from Content ${contentID}`
    }

    static readRecorded(contentID, userID)
    {
        return `Content ${contentID} read by User ${userID}`
    }

    static userValidated(userID)
    {
        return `User with User ID ${userID} validated successfully`
    }
}

module.exports=UserInteraction;