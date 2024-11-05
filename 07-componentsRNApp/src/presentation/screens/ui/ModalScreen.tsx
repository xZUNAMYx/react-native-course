/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Modal, Platform, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ModalScreen = () => {
    const { bottom } = useSafeAreaInsets();

    const [isVisible, setIsVisible] = useState(false);

    return (
        <CustomView margin>
            <Title text="Modal" safe />

            <Button
                text="Open modal"
                onPress={ () => setIsVisible(true)}
            />

            <Modal
                animationType="slide"
                visible={ isVisible}
                transparent={true}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text="Modal content" safe />
                    </View>

                    <View style={{ flex: 1 }}/>

                    <Button
                        text="Close modal"
                        onPress={ () => setIsVisible(false)}
                        styles={{
                            borderRadius: 0,
                            height: Platform.OS === 'android' ? 40 : 40 - bottom,
                        }}
                    />
                </View>
            </Modal>
        </CustomView>
    );
};
