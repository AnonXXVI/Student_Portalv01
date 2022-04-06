import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons, FontAwesome,MaterialIcons, Foundation } from '@expo/vector-icons';



export default function App() {
  return (
    <View>
        <View style={styles.mainBox}>
      <ScrollView style={styles.scroll_edit}>
      <View style={styles.second_layer}>

        <View style={styles.icon_box}>
          <Ionicons name="arrow-back-outline" size={34} color="#EFEFF3" />
          <SimpleLineIcons name="options-vertical" size={24} color="#EFEFF3" />
        </View>
        <View style={styles.activity}><Text><Text style={styles.active_color}>{'\u2B24'}</Text>  <Text style={styles.active_edit}> Active </Text>  <Text style={styles.active_color}>{'\u2B24'}</Text></Text></View>
        <View style={styles.pro_box}> 

          <Image style={styles.avatar} source={require("./assets/Moses.png")}/>
          
        </View>

        </View>

        <View style={styles.third_layer}>
          <Text style={styles.extra_details}>20109920</Text>
          <Text style={styles.my_name}>Mpho Nkaki</Text>
          <Text style={styles.extra_details1}>BSCSE</Text>

        </View>
        
      <View style={styles.first_layer}>
            
      <View style={styles.menu_list}>
        <FontAwesome name="calendar-check-o" size={28} color="#fff"/>
        <MaterialIcons name="library-books" size={30} color="#fff" />
        <MaterialIcons name="grade" size={30} color="#fff" />
        <Foundation name="results" size={30} color="#2C3E50" />
      </View>

      <View>
      <Text style={styles.semester_text1}>Year 1 Semester 1</Text>

      <View style={styles.semester_grades1}>
        
        <View style={styles.internal}>
          <Text style={styles.course_name}>Object Oriented Programming C++</Text>
          <Text style={styles.course_name}>B+</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Electronics</Text>
          <Text style={styles.course_name}>C+</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Calculus</Text>
          <Text style={styles.course_name}>B+</Text>
        </View>
        <View style={styles.internal}>
          <Text style={styles.course_name}>Circuit Analysis</Text>
          <Text style={styles.course_name}>A+</Text>
        </View>
        

      </View>

      <Text style={styles.semester_text2}>Year 1 Semester 2</Text>

      <View style={styles.semester_grades2}>
        
        <View style={styles.internal}>
          <Text style={styles.course_name}>Object Oriented Programming C++ II</Text>
          <Text style={styles.course_name}>A</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Engineering Mathematics</Text>
          <Text style={styles.course_name}>B</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Design and Practice</Text>
          <Text style={styles.course_name}>B</Text>
        </View>
        <View style={styles.internal}>
          <Text style={styles.course_name}>Digital Logic Design</Text>
          <Text style={styles.course_name}>A</Text>
        </View>
        

      </View>

      <Text style={styles.semester_text3}>Year 2 Semester 1</Text>

      <View style={styles.semester_grades3}>
        
        <View style={styles.internal}>
          <Text style={styles.course_name}>Embedded Software Design</Text>
          <Text style={styles.course_name}>A</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Cryptography</Text>
          <Text style={styles.course_name}>B</Text>
        </View>

        <View style={styles.internal}>
          <Text style={styles.course_name}>Electronic Principles</Text>
          <Text style={styles.course_name}>A</Text>
        </View>
        <View style={styles.internal}>
          <Text style={styles.course_name}>Discrete Mathematics</Text>
          <Text style={styles.course_name}>C</Text>
        </View>
        

      </View>
      
      </View>

        </View>
      <StatusBar style="auto" />
      </ScrollView>


    </View>




    </View>
    
    );
}


const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: '#EFEFF3',
    padding: 2
  },

  first_layer: {
    backgroundColor: '#EFEFF3',
    height: '100%'
  },

  second_layer: {
    backgroundColor: '#070938',
    height: '30%',
    width: '100%',
    
  },

  icon_box: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },

  avatar: {
    height: 150,
    width: 150,
    marginTop: 13,

  },

  pro_box: {
    flexDirection: 'row',
    alignContent:'center',
    justifyContent: 'center',
    
  },

  third_layer: {
    height: '7%',
    width: '100%',
    backgroundColor: '#070938',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20
   
  },
  my_name: {
    fontSize: 15,
    color: '#EFEFF3',
    marginLeft: 61
    
  },

  extra_details: {
    color: '#E0E0E0',
    fontSize: 13,
    paddingLeft: 15,
    marginTop: 7
  },

  extra_details1: {
    color: '#E0E0E0',
    fontSize: 13,
    paddingLeft: 80,
    marginTop: 7
  },

  menu_list: {
    marginTop: 5,
    height: '12%',
    width: '100%',
    backgroundColor: '#0050EF',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },

  semester_text1: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 19,
  },
  semester_text2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 19,
  },

  semester_text3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 19,
  },

  semester_grades1: {
    marginTop: 2,
    height: '40%',
    width: '100%',
    backgroundColor: '#0050EF',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    justifyContent: 'space-evenly'


  },
  semester_grades2: {
    marginTop: 2,
    height: '40%',
    width: '100%',
    backgroundColor: '#0050EF',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    justifyContent: 'space-evenly'


  },
  semester_grades3: {
    marginTop: 2,
    height: '40%',
    width: '100%',
    backgroundColor: '#0050EF',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    justifyContent: 'space-evenly'


  },

  internal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  course_name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  scrollUpOrDown: {
    marginHorizontal: 5,
    backgroundColor: '#36454F'
  },

  scroll_edit: {
    marginVertical: 10,
    marginHorizontal: 10
  },

  activity: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },

  active_color: {
    color: 'green'
  },

  active_edit: {
    fontWeight: 'bold',
    color: '#EFEFF3'
  }

});


