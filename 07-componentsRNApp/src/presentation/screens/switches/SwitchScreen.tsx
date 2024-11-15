/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Separator } from '../../components/ui/Separator';
// import { Switch } from 'react-native-gesture-handler';

export const SwitchScreen = () => {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ state, setState ] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <CustomView style={{ marginTop: 0, paddingHorizontal: 10 }}>
            <Card style={{ marginTop: 50 }}>
                <CustomSwitch
                    isOn={ state.isActive }
                    onChange={ (value) => setState({ ...state, isActive: value }) }
                    text="Activo"
                />

                <Separator />

                <CustomSwitch
                    isOn={ state.isHungry }
                    onChange={ (value) => setState({ ...state, isHungry: value }) }
                    text="Hambre"
                />

                <Separator />

                <CustomSwitch
                    isOn={ state.isHappy }
                    onChange={ (value) => setState({ ...state, isHappy: value }) }
                    text="Feliz"
                />

            </Card>
        </CustomView>
    );
};
