import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
  AsyncStorage
} from "react-native";
import axios from "axios";

export default class Loging extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>

        <Image
          source={require("../assets/coverr.jpg")}
          style={{ position: "absolute", marginTop: -5 }}
        ></Image>
        <Image
          source={require("../assets/download.png")}
          style={{ marginTop: 20, position: "absolute", alignSelf: "center" }}
        ></Image>

        <Text style={styles.greeting}>{"Hello Again.\n Welcome Back."}</Text>

        <View style={styles.errorMessage}>
          <Text style>{"Error"}</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder="email"
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder="password"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.Loging}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sing in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "#414959", fontSize: 13 }}>
            {" "}
            New to Social App ?
            <Text style={{ color: "#E9446A", fontWeight: "500" }}>
              {" "}
              Sing Up{" "}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  Loging = async () => {
    // fetch("http://192.168.8.100:6000/api/v1/auth", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(res => {
    //     if (res.success === true) {
    //       var email = res.errorMessage;
    //       AsyncStorage.setItem("email", email);

    //       this.props.navigate.push({
    //         id: "Profile"
    //       });
    //     } else {
    //       alert(res.message);
    //     }
    //   })
    //   .done();
    try {
      const res = await axios.post("http://192.168.8.100:5000/api/v1/auth", {
        email: this.state.email,
        password: this.state.password
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  greeting: {
    marginTop: 160,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },

  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 30
  }
});
