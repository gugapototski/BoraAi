import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import carro from '/assets/carro-azul.png';
import localizacao from '/assets/icon-localizacao.png';
import pagamento from '/assets/icon-pagamento.png';
import horario from '/assets/icon-horario.png';
import perfil from '/assets/perfil.png';
import seta from '/assets/seta-vermelha.png';

export default function PainelCarona() {
    return (
        <>
            <Image source={perfil} style={estilos.perfil} />
            <Text style={estilos.texto}>Carona com Gabriella Marreto {'\n'}
                Informações da Carona:</Text>

            <Image source={seta} style={estilos.seta} />

            <Image source={carro} style={estilos.carro} />
            <Text style={[estilos.titulo, estilos.tituloCarro]}>Carro</Text>
            <Text style={[estilos.descricao, estilos.descricaoCarro]}>carro - ano {'\n'}cor - placa</Text>

            <Text style={[estilos.titulo, estilos.tituloLocalizacao]}>Ponto de saída</Text>
            <Image source={localizacao} style={[estilos.localizacao, estilos.icone]} />
            <Text style={[estilos.descricao, estilos.descricaoLocalizacao]}>Descrição do endereço de saída</Text>

            <Text style={[estilos.titulo, estilos.tituloHorario]}>Horário</Text>
            <Image source={horario} style={[estilos.horario, estilos.icone]} />
            <Text style={[estilos.descricao, estilos.descricaoHorario]}>H. saida - H. chegada</Text>

            <Text style={[estilos.titulo, estilos.tituloPagamento]}>Pagamento</Text>
            <Image source={pagamento} style={[estilos.pagamento, estilos.icone]} />
            <Text style={[estilos.descricao, estilos.descricaoPagamento]}>Tipo de pagamento</Text>

            <TouchableOpacity style={estilos.botao} onPress={() => console.log('Botão pressionado')}>
                <Text style={estilos.botaoTexto}>Entrar em contato</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => console.log('Botão pressionado')}>
                <Text style={estilos.botaoTexto}>Encerrar carona</Text>
            </TouchableOpacity>
        </>
    );

}


const estilos = StyleSheet.create({
    perfil: {
        marginVertical: 16,
        marginHorizontal: 25,
        width: "50px",
        height: "50px",

    },
    texto: {
        marginVertical: -70,
        marginHorizontal: 92,
        width: "100%",
        fontSize: 13,
        lineHeight: 26,
        fontWeight: "bold",
    },
    seta: {
        width: "40px",
        height: "40px",
        marginTop: "20px",
        right: "2px",
        alignItems: "flex-end",
        alignSelf: "flex-end",

    },
    icone: {
        left: "4%",
        width: "45px",
        height: "45px",
        marginLeft: "60px",
        marginBottom: 20,
    },
    
    carro: {
        marginTop: 45,
        width: "120px",
        height: "40px",
        marginBottom: 14,
        marginLeft: "60px"
    },
    /* localizacao: {
        marginBottom: 20,
        
    },
    horario: {
        marginBottom: 20,
        
    },
    pagamento: {
        marginBottom: 20,

    }, */
    titulo: {
        color: "#4F4F4F",
        position: "absolute",
        width: "100%",
        height: "27px",
        left: "152px",
        fontSize: 16,
        fontWeight: "bold",
    },
    descricao: {
        color: "#FF2B2B",
        position: "absolute",
        width: "160px",
        height: "27px",
        left: "152px",
        fontSize: 12,
        fontWeight: "bold",

    },
    tituloCarro: {
        marginTop: 92,
    },
    tituloLocalizacao: {
        marginTop: 150,
    },
    tituloHorario: {
        marginTop: 218,
    },
    tituloPagamento: {
        marginTop: 281,
    },
    descricaoCarro: {
        marginTop: 110,
    },
    descricaoLocalizacao: {
        marginTop: 168,
    },
    descricaoHorario: {
        marginTop: 235,
    },
    descricaoPagamento: {
        marginTop: 300,
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
        justifyContent: 'center'
    },
    botaoTexto: {
        color: 'white',
        fontSize: 16,
    },


});


