import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, CheckBox } from 'react-native';
import { supabase } from '../supabase';
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setMessage('Por favor, preencha todos os campos');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem');
      return;
    }
  
    try {
      const { data, error } = await supabase
        .from('User')
        .insert([{ nome: name, email, senha: password }]); 
  
      if (error) {
        console.log("Erro ao criar conta:", error.message);
        setMessage('Erro ao criar conta: ' + error.message);
        return;
      } else {
        setMessage('Conta criada com sucesso!');
        console.log("Conta criada:", data);
        navigation.navigate('LoginPage'); 
      }
    } catch (err) {
      console.log("Ops, tivemos um problema:", err);
      setMessage("Ops, tivemos um problema:" + err.message);
    }
  };
  

  return (
    <View style={styles.container}>
      {/* ContainerBox para o título */}
      <View style={styles.containerBox}>
        <Text style={styles.headerTitle}>Vamos</Text>
        <Text style={styles.headerSubtitle}>
          <Text style={styles.bold}>Criar{"\n"}A sua{"\n"}Conta?</Text>
        </Text>
      </View>

      <View style={styles.containermsg}>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
      

      {/* Input de Nome Completo */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#345653" style={styles.icon} />
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#345653"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
  
      {/* Input de Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#345653" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#345653"
          style={styles.input}
          value={email}
          onChangeText={setEmail} keyboardType="email-address"
        />
      </View>
  
      {/* Input de Senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#345653" style={styles.icon} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#345653"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
  
      {/* Input de Confirmação de Senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#345653" style={styles.icon} />
        <TextInput
          placeholder="Digite a senha novamente"
          placeholderTextColor="#345653"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
  
      {/* Checkbox e Termos */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          tintColors={{ true: "#345653", false: "#4E387E" }}
        />
        <Text style={styles.checkboxText}>
          I agree to the <Text style={styles.link}>Terms & Privacy</Text>
        </Text>
      </View>
  
      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupButtonText}>Cadastrar</Text>
      </TouchableOpacity>
  
      {/* Link para login */}
      <Text style={styles.footerText}>
        Já possui uma conta? <Text style={styles.link} onPress={() => navigation.navigate('LoginPage')}>Faça login</Text>
      </Text>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#E8F0F2", 
    padding: 25,
  },

  containermsg: {
    padding: 15,
  },

  message: {
    color: '#FF5733', // Cor de destaque para mensagens de erro
    marginBottom: 12,
    textAlign: 'center',
  },

  containerBox: {
    backgroundColor: "#2A595A", 
    paddingHorizontal: 35,
    paddingVertical: 45,
    borderBottomLeftRadius: 40, // Bordas mais arredondadas
    borderBottomRightRadius: 40,
    width: "100%",
  },

  headerTitle: {
    fontSize: 48,
    color: "#ebd3c1",
    fontWeight: "400",
  },

  headerSubtitle: {
    fontSize: 46,
    color: "#ebd3c1",
    lineHeight: 52,
  },

  bold: {
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    marginVertical: 12,
    paddingHorizontal: 20,
    height: 55,
    shadowColor: "#000", // Adicionando leve sombra
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },

  icon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    color: "#345653",
    fontSize: 16,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  checkboxText: {
    color: "#5C5470",
    marginLeft: 8,
  },

  link: {
    color: "#FF5733",
    fontWeight: "bold",
  },

  signupButton: {
    backgroundColor: "#FF5733", // Botão destacado
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    marginVertical: 20,
  },

  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  footerText: {
    color: "#5C5470",
    textAlign: "center",
  },
});