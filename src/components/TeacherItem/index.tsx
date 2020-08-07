import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOulineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem(){
    return (
    
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                style={styles.avatar}
                source={{uri: 'https://avatars1.githubusercontent.com/u/53883371?s=460&u=0a08333623e5c50ddf49c362a76133bd341ec710&v=4'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Felipe Ribeiro</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta de Números e todo o seu poder
                {'\n'}{'\n'}
                Professor apaixonado por cálculos e tudo que envolve os números!!!
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOulineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
        
    )
}

export default TeacherItem;

