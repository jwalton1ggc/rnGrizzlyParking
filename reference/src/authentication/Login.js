import { observer } from 'mobx-react';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Login = observer(
    ({ navigation, ...props }) => {
        const RootStore = React.useContext(RootStoreContext);

        return (
            <View style={styles.main}>
                <Image style={styles.logo}
                    source={require("../../lib/images/ggc-logo.png")} />
                <TextInput style={StyleSheet.flatten([
                    styles.input,
                    {
                        marginTop: 50,
                        marginBottom: -1,
                    }])}
                    placeholder="Username"
                    value={RootStore.LoginUI.username}
                    onChangeText={(text) => RootStore.LoginUI.setUsername(text)} />
                <TextInput style={styles.input}
                    placeholder="Password"
                    value={RootStore.LoginUI.password}
                    secureTextEntry={true}
                    onChangeText={(text) => RootStore.LoginUI.setPassword(text)} />
                <TouchableOpacity style={styles.button}
                    onPress={() => RootStore.LoginDomain.login(navigation)}>
                    <Text style={styles.buttonText}>
                        Log in
                    </Text>
                </TouchableOpacity>
                {/*<View style={styles.button}>
                    <Button
                        title="Log in"
                        color="#0A5A45"
                        onPress={() => RootStore.LoginDomain.login(navigation)} />
                </View>*/}
            </View>
        );
    }
);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#DADADA",
    },
    logo: {
        height: 50,
        resizeMode: "contain",
        marginTop: 24,
    },
    input: {
        height: 50,
        width: 350,
        paddingLeft: 12,
        fontSize: 16,
        backgroundColor: "#FFFFFF",
        borderColor: "#323232",
        borderWidth: 1,
    },
    button: {
        height: 50,
        width: 150,
        marginTop: 24,
        backgroundColor: "#0A5A45",
        justifyContent: "center"
    },
    buttonText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    }
});