import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef } from 'react';
import { Button, View } from 'react-native';

const App = () => {
  const sheet = useRef(null)

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present()
    console.log('horray! sheet has been presented 💩')
  }

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss()
    console.log('Bye bye 👋')
  }

  return (
    <View>
      <Button onPress={present} title="Present" />
      <TrueSheet
        ref={sheet}
        sizes={['auto', 'large']}
        cornerRadius={24}
        onDismiss={() => {
            alert(1)
            console.log('[FROM CALLBACK] Sheet dismissed');
        }}
        onDragChange={(dragging) => {
            console.log('[FROM CALLBACK] Dragging:', dragging);
        }}
        onPresent={() => {
            console.log('[FROM CALLBACK] Presented');
        }}
        onSizeChange={(size) => {
            console.log('[FROM CALLBACK] Size changed:', size);
        }}
        dismissible={true}
        grabber
      >
        <Button onPress={dismiss} title="Dismiss" />
      </TrueSheet>
    </View>
  )
}

export default App;
