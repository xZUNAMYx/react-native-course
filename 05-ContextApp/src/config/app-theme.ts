import { StyleSheet } from 'react-native';

// app-theme.ts

// const appTheme = {
//     colors: {
//         primary: '#007bff',
//         secondary: '#6c757d',
//         background: '#f8f9fa',
//         text: '#343a40',
//     },
//     fonts: {
//         regular: 'Roboto-Regular',
//         bold: 'Roboto-Bold',
//     },
//     // Add more theme properties as needed
// };

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 10,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },

    primaryButton: {
        padding: 10,
        backgroundColor: '#dadada',
        borderRadius: 5,
        marginVertical: 10,
    },
});
