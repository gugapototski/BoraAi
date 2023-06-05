
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import robo from '/assets/robo.png';
import perfil from '/assets/perfil.png';
import seta from '/assets/seta-vermelha.png';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Avaliacao() {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingPress = (rating) => {
        setSelectedRating(rating);
        console.log(rating);
    };

    return (
        <>
            <Image source={perfil} style={estilos.perfil} />
            <Image source={seta} style={estilos.seta} />
            <Text style={estilos.texto}>Uhuuul, parece que a carona foi um sucesso!!</Text>

            <Image source={robo} style={estilos.robo} />
            <Text style={estilos.texto}>Que tal deixar sua avaliação?</Text>

            <View style={estilos.estrelinha}>
                <TouchableOpacity
                    style={[estilos.starIcon, selectedRating >= 1 && estilos.activeStar]}
                    onPress={() => handleRatingPress(1)}
                >
                    <Icon name={selectedRating >= 1 ? 'star' : 'star-o'} size={40} color="#FF2B2B" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilos.starIcon, selectedRating >= 2 && estilos.activeStar]}
                    onPress={() => handleRatingPress(2)}
                >
                    <Icon name={selectedRating >= 2 ? 'star' : 'star-o'} size={40} color="#FF2B2B" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilos.starIcon, selectedRating >= 3 && estilos.activeStar]}
                    onPress={() => handleRatingPress(3)}
                >
                    <Icon name={selectedRating >= 3 ? 'star' : 'star-o'} size={40} color="#FF2B2B" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilos.starIcon, selectedRating >= 4 && estilos.activeStar]}
                    onPress={() => handleRatingPress(4)}
                >
                    <Icon name={selectedRating >= 4 ? 'star' : 'star-o'} size={40} color="#FF2B2B" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilos.starIcon, selectedRating >= 5 && estilos.activeStar]}
                    onPress={() => handleRatingPress(5)}
                >
                    <Icon name={selectedRating >= 5 ? 'star' : 'star-o'} size={40} color="#FF2B2B" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={estilos.botao} onPress={() => console.log('Botão pressionado')}>
                <Text style={estilos.botaoTexto}>Encerrar Carona</Text>
            </TouchableOpacity>
        </>
    );

}


const estilos = StyleSheet.create({
    estrelinha: {
        flexDirection: 'row',
        marginVertical: '10%'
    },
    starIcon: {
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: '#fff',
        cursor: 'pointer',
        color: '#FF2B2B',
        fontSize: 40, // alterar o tamanho das estrelas
    },
    activeStar: {
        backgroundColor: '#FF2B2B',
        content: '\u2605',
    },

    perfil: {
        marginVertical: 16,
        marginHorizontal: 25,
        width: "50px",
        height: "50px",
    },
    texto: {
        marginVertical: 25,
        marginHorizontal: 20,
        width: "300px",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },
    seta: {
        width: "40px",
        height: "40px",
        marginTop: "-60px",
        alignItems: "flex-end",
        alignSelf: "flex-end",

    },
    robo: {
        width: "120px",
        height: "86px",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center'

    },
    botao: {
        width: "210px",
        height: "32px",
        backgroundColor: '#FF2B2B',
        padding: 10,
        borderRadius: 100,
        marginBottom: 8,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
        marginVertical:'20px'
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
    }


});