/* eslint-disable react/prop-types */
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { Trigger, Overlay, Content, Root } from "./styles";


export default function Dialog({title,text,props,description, optionOne, optionTwo, action, icon: Icon, isActive = false}) {


    return (
        <Root isActive={Boolean(isActive)}>
            <Trigger asChild  isActive={Boolean(isActive)}>
                {
                    Icon ? <Icon fontSize={props.fontSize} color={props.color}/> : <p style={{background: props.color, color: props.colorText, padding: props.padding, textAlign: props.alignItem, borderRadius: props.borderRadious, fontSize: props.fontSize}}> {text} </p>
                }
            </Trigger>

        <AlertDialog.Portal>

          <Overlay/>

          <Content>

            <div>
                <h1>
                    {title}
                </h1>

                <p>
                    {description}
                </p>

                

                <div>
                    <AlertDialog.Cancel>
                        {optionOne}
                    </AlertDialog.Cancel>
                    
                    <AlertDialog.Action onClick={action} style={{background: props.colorButton}} >
                        {optionTwo}
                    </AlertDialog.Action>
                </div>
            </div>


          </Content>
        </AlertDialog.Portal>
      </Root>
    )
}