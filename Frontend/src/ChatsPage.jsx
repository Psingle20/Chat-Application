// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props)=>{
    // const chatProps= useMultiChatLogic('393e7523-6cac-401c-b700-133abb4ca69c',props.user.username,props.user.secret);
    return <>
    {/* <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}></MultiChatSocket>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}></MultiChatWindow>
    </div> */}
    <div style={{height:"100vh"}}>

    
    <PrettyChatWindow
      projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
    </>
   
    
}
export default ChatsPage;