const getTimestampMillis=()=>{

    return new Date().getTime();

}

const getUTCTimestamp=(millis)=>{

    return new Date(millis).toString();

}

module.exports={getTimestampMillis, getUTCTimestamp}