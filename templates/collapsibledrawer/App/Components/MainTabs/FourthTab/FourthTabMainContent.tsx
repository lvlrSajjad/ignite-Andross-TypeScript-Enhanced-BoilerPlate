import * as React from 'react'
import {Text, View} from 'react-native'

interface FourthTabMainContentProps {

}

export default class FourthTabMainContent extends React.Component<FourthTabMainContentProps> {

    render () {
        return (
            <View>
                {new Array(40).fill('item').map((_, i) => (
                    <View
                        key={i}
                        style={{
                            backgroundColor: '#F5F5F5',
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#E5E5E5'
                        }}
                    >
                        <Text>{`Item ${i + 1}`}</Text>
                    </View>
                ))}
            </View>
        )
    }
}
