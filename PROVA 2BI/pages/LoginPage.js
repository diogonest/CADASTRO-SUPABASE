import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Para ícones
import { supabase } from '../supabase';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setMessage('Por favor, preencha todos os campos');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('email', email)
        .eq('senha', senha)
        .single(); // Obtém um único registro

      if (error || !data) {
        setMessage('E-mail ou Senha incorretos');
      } else {
        setMessage('Login realizado');
        navigation.navigate('MainPage'); // Navega para a página principal após login
      }
    } catch (err) {
      console.log("Ops, tivemos um problema:", err);
      setMessage('Ops, tivemos um problema: ' + err.message);
    }
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../pictures/mydesk.png')} />
        <Text style={styles.title}>My Desk</Text>
        <Text style={styles.subtitle}>o seu painel imobiliário</Text>
      </View>

      {/* Input de email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#2A595A" style={styles.icon} />
        <TextInput 
        placeholder="Email" placeholderTextColor="#2A595A" 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"/>
      </View>

      {/* Input de senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#2A595A" style={styles.icon} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#2A595A"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true} // Ativa o modo de segurança
        />
      </View>

      {/* Esqueceu sua senha */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPage')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Separator */}
      <Text style={styles.orText}>or</Text>

      {/* Botão Criar Conta */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Crie uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#345653",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#ebd3c1",
    textAlign: "center",
    lineHeight: 95,
  },
  subtitle: {
    paddingTop: 30,
    fontSize: 15,
    color: "#ebd3c1",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBD5C3",
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#2A595A",
  },
  forgotPassword: {
    color: "#ebd3c1",
    fontSize: 14,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  loginButton: {
    backgroundColor: "#EBD5C3",
    borderRadius: 25,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  loginButtonText: {
    color: "#2A595A",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#EBD5C3",
    fontSize: 16,
    marginVertical: 20,
  },
  createAccountButton: {
    backgroundColor: "#D3694D",
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  createAccountText: {
    color: "#ebd3c1",
    fontSize: 16,
    fontWeight: "bold",
  },
});
