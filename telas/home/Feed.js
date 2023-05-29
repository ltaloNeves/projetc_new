import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const LinkButton = ({ url, title }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Feed() {
  const [isButton1Active, setIsButton1Active] = useState(true);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const handleButton1Press = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handleButton2Press = () => {
    setIsButton1Active(false);
    setIsButton2Active(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagensHead}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={require('../../assets/Projeto_Mobile/avatar/perfil.png')}
        />
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/6381774.png")}
        />
      </View>

      <View style={styles.buttonsTwo}>
        <TouchableOpacity
          style={[styles.button, isButton1Active && styles.activeButton]}
          onPress={handleButton1Press}
        >
          <Text style={styles.buttonText}>Social</Text>
          {isButton1Active && <View style={styles.line} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isButton2Active && styles.activeButton]}
          onPress={handleButton2Press}
        >
          <Text style={styles.buttonText}>Informações</Text>
          {isButton2Active && <View style={styles.line} />}
        </TouchableOpacity>

        <View>
          <HorizontalLine
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginVertical: 20,
              marginBottom: 20,
            }}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {isButton1Active && (
          <View style={styles.content}>
            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/margarida.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}> Dr Margarida Ribeiro</Text>
                  <Text >@margarida</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                  Os avanços que fazemos e as notáveis mudanças que crescem no
                  nosso ambiente, focado na área da amamentação é incrível!!!!!
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>


            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/marta.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}} >Marta Matos</Text>
                  <Text>@matos1</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                Alguém sabe me informar se o banco de leite funciona durante os domingos?

                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>


            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/fernanda.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}>Fernanda Aguiar</Text>
                  <Text>@aguiarfernanda2</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                O que a gestante precisa fazer para se preparar para a amamentação?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>


            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/perfil_sem_foto.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}>Rita Silva</Text>
                  <Text>@rita</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                O que a gestante precisa fazer para se preparar para a amamentação?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>




            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/margarida.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}>Ivone Santos </Text>
                  <Text>@ivone2santos</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                eu devo me preocupar se meu filho só quiser mamar de um lado?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>



            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}>Carla Sampaio </Text>
                  <Text>@carla22</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                  Amigas, posso tomar qualquer tipo de remédio durante a amamentação?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>


            <View style={styles.vacinas}>
              <View style={styles.containerHeader}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                  source={require("../../assets/Projeto_Mobile/avatar/perfil.png")}
                />
                <View style={styles.textHeader}>
                  <Text style = {{fontWeight: "bold",}}>Maria</Text>
                  <Text>@maria123</Text>
                </View>
              </View>
              <View style={styles.text}>
                <Text>
                  é normal não conseguir mais armazenar leite materno??
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 55,
                  justifyContent: "space-between",
                  marginRight: 50,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/favorite_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/mode_comment_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/bookmarks_FILL0_wght300_GRAD-25_opsz48.png")}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/Projeto_Mobile/icons/ios_share_FILL0_wght300_GRAD-25_opsz48.png")}
                />
              </View>
            </View>



          </View>
        )}
        {isButton2Active && (
          <View style={styles.content}>
            <View>
              <ScrollView
                horizontal
                contentContainerStyle={styles.scrollViewContent}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)',
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/1.png")}
                  />
                </View>

                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)', 
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/2.png")}
                  />
                </View>

                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)',
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/3.png")}
                  />
                </View>

                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)',
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/4.png")}
                  />
                </View>

                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)',
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/5.png")}
                  />
                </View>

                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: 'rgba(186, 85, 211, 0.5)',
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={require("../../assets/Projeto_Mobile/dicas/7.png")}
                  />
                </View>
              </ScrollView>
            </View>

            <View>
              <ScrollView>

                <View style = {styles.newsContainer}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100, 
                      borderRadius: 10,
                      
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}> 
                    <LinkButton 
                      url="https://www.cnnbrasil.com.br/saude/interrupcao-precoce-do-aleitamento-e-fator-de-risco-para-carie-na-infancia-diz-estudo/"
                      title="Interrupção precoce do aleitamento é fator de risco para cárie na infância, diz estudo"
                    />
                  </View>
                </View>


                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}>
                    <LinkButton
                      url="https://www.cnnbrasil.com.br/saude/especialistas-revelam-mitos-e-verdades-sobre-a-amamentacao/"
                      title="Especialistas revelam mitos e verdades sobre a amamentação"
                    />
                  </View>
                </View>


                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}>
                    <LinkButton
                      url="https://www.cnnbrasil.com.br/saude/brasil-registra-aumento-de-5-nas-coletas-de-leite-materno-durante-pandemia/"
                      title="Brasil registra aumento de 5% nas coletas de leite materno durante pandemia"
                    />
                  </View>
                </View>


                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}>
                    <LinkButton
                      url="https://www.cnnbrasil.com.br/saude/amamentar-reduz-o-risco-de-cancer-de-utero-e-de-mama-diz-saude/"
                      title="Amamentar reduz o risco de câncer de útero e de mama, diz Saúde"
                    />
                  </View>
                </View>


                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}> 
                    <LinkButton
                      url="https://www.cnnbrasil.com.br/saude/saiba-o-que-comer-e-o-que-evitar-no-periodo-da-amamentacao/"
                      title="Saiba o que comer e o que evitar no período da amamentação"
                    />
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 10 }}
                      source={require("./assets/Projeto_Mobile/infos/news1.png")}
                    />
                  </View>
                  <View style={{ width: 200,}}>
                    <LinkButton
                      url="https://www.cnnbrasil.com.br/saude/interrupcao-precoce-do-aleitamento-e-fator-de-risco-para-carie-na-infancia-diz-estudo/"
                      title="Interrupção precoce do aleitamento é fator de risco para cárie na infância, diz estudo"
                    />
                  </View>
                </View>


                </View>

                
              </ScrollView>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.botao}>
        <TouchableOpacity style={{ padding: 10 }}>
          <Image
            source={require("../../assets/Projeto_Mobile/icons/add_circle_FILL0_wght300_GRAD-25_opsz48.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#BA55D3",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    right: 20,
    zIndex: 1,
  },
  imagensHead: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    justifyContent: "space-between",
    width: "90%",
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeButton: {
    borderColor: "#BA55D3",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#BA55D3",
  },
  content: {
    marginTop: 1,
  },
  buttonsTwo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  vacinas: {
    backgroundColor: "rgba(192, 192, 192, 0.4)",
    width: 330,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-around",
  },
  containerHeader: {
    flexDirection: "row",
  },
  textHeader: {
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 5,  
   },
  text: {
    marginTop: 10,
    marginLeft: 60,
    marginBottom: 10,
  },
});
