import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {View} from "react-native";


class LogMeIn extends React.Component{
    render(){
        return(
            <View>
                <Input
                    placeholder='BASIC INPUT'
                />
            </View>
        );
    }
}
