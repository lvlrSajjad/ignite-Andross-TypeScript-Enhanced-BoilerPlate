<h1 align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/ignite-typescript-logo.png" alt="IgniTypescript" width="400">
<br>
 ignite boilerplate andross typescript
 </br>
</h1>

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* This Boiler Plate is just my Customized version of ignite Andross 
* Installed And Configed With TypeScript
* Updated React Native To The Lastest Version (0.57.4)
* Added Rtl Support
* Added Switchable ColorScheme Support
* Add Better Multi language Support And Add Language To App Settings Redux
* Keep Settings Even When The App Closed
* TODO // Internal Set Of Material Components
* HighLighted Dependencies that installed :

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/deps.png" width="100%">

    
    You can see more on package .json
 * Recommended Dependencies :
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/recommended.png" width="80%">

## :fire: Ignite Cli
  
  First you must install ignite cli as gobal with this command
  ```
npm install -g ignite-cli
```
  For More Cli Instructions Please refer to below sections and ignite boilerplate page :
  https://github.com/infinitered/ignite

## :snowflake: Usage

  You can create your app using this boilerplate with this commands
  
 ```
 ignite new YourAppName -b ignite-boilerplate-andross-typescript
```
During the installation,
You can choose your login screen style or no login screen:

<p align="center">

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/login.png" width="80%">

if you choose a login screen, redux,components,login screen will be generated then you can change them.

You can see what will be these login screens look like in  
<a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript#arrow_down_small-generate-login-screens">Here</a>

</p>


You can choose your main screen style or just a simple screen:
<p align="center">

<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/main.png" width="80%">

You can see a gif and read about templates in below links: 
<p align="center">
<a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript#smiley-social-media-template">Social Media</a><br>
<a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript#arrow_heading_down-bottom-tabbed-template">Bottom Tab Bar</a><br>
<a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript#top-top-tabbed-template">Top Tab Bar</a><br>
<a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript#top-navigation-drawer-template">Navigation Drawer</a>
</p>
</p>

You can work with combination of this options for example if you choose sms login and social media after installation your app will be like this:
<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/combined.gif" width="100%">
</p>

after installation run below commands:
```
   cd YourAppName
   react-native link
   react-native run-ios or react-native run-android
   ```
## :exclamation: Possible Errors
  
   if you've got transform-hmr error on boundle so start your boundler with this command:
   `` react-native start --reset-cache ``
   
## :file_folder: Folder Structure
        
<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/folder.png" width="100%">
</p>

## :arrow_down_small: Rtl Support Component Generate

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/rtl.gif" width="100%">
</p>

If you want to your app support ltr/rtl layouts separately
you can just use this command inside the app folder (just replace pizza with your app name): 
```
ignite g component pizza --rtlsupport
```
it will produce this file/folders inside your Components folder :

<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/rtl.png" width="80%">
</p>

Just use it as :
```typescript jsx
import Pizza from './path/to/Pizza'
```
The generated index.tsx will be like below:
 
 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/rtl-component-index.png" width="80%">
 </p>

## :arrow_down_small: Normal Component Generate

If you don't want Rtl/Ltr Switchable component us just create the component with this command:
```
ignite g component pizza
```
it will produce this file/folders inside your Components folder :

<p align="center">
<img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/component.png" width="80%">
</p>

Just use it as :
```typescript jsx
import Pizza from './path/to/Pizza'
```
The generated index.tsx will be like below:

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/normal-component-index.png" width="80%">
 </p>
 
## :arrow_down_small: Screen Generate
You can generate normal screens in containers folder then add them to the navigation by this command
   ```
    ignite g container ScreenName
   ```
   
## :arrow_down_small: Generate Login Screens

You can also generate a material designed Login screen with some related components and reduxs by this command:

<h3 align="center">Normal Login Screen</h3>

   <p align="center">
   <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/login.gif" width="100%">
   </p>
   
```
    ignite g container LoginScreen
   ```
   Or Choosing Simple login screen at project initialization
   

   
<h3 align="center">Sms Login Screen</h3>


<p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/smslogin.gif" width="100%">
</p>
 
```
      ignite g container SmsLoginScreen
``` 
   Or Choosing Sms login screen at project initialization

   
   
   then just add 
   ```typescript jsx
  login: require('./Login/LoginRedux').reducer

```
in the end of 
```typescript jsx
reducers: Reducer<ApplicationState> = combineReducers 
```
array in
```
App/Redux/index.tsx
```
If you want set the login screen as launch screen edit 
```
App/Navigation/AppNavigation.tsx
```
this way :
```typescript jsx
...
initialRouteName: "LoginScreen",
...
```

## :arrow_heading_down: Bottom Tabbed Template
This template provides some components and screens with navigation for having a bottom tabbed container with 5 tabs in the first page of your app.
you can change tabs names and contents after installation.
You can use this template by choosing it on boilerplate installation.
this is a preview of Bottom Tabbed Template : 

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/bottomtabbed.gif" width="100%">
</p>

You can generate a screen with this template using below command :

```
 ignite g container YourScreenName BottomTabbed
```
this command will produce a screen file with tab files and will add this screen to AppNavigation file

You can edit file names and contents of files inside YourScreenNameTabs folder, just be sure if you edited the file names you also edit the imports inside YourScreenName.tsx file.
You can also edit navigation icon names inside YourScreenName.tsx


## :top: Top Tabbed Template
This template provides some components and screens with navigation for having a top tabbed container with 3 tabs with list content in the first page of your app.
you can change tabs names and contents after installation.
You can use this template by choosing it on boilerplate installation.
this is a preview of Top Tabbed Template : 

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/toptabbed.gif" width="100%">
</p>

You can generate a screen with this template using below command :

```
 ignite g container YourScreenName TopTabbed
```

this command will produce a screen file with tab files and will add this screen to AppNavigation file

You can edit file names and contents of files inside YourScreenNameTabs folder, just be sure if you edited the file names you also edit the imports inside YourScreenName.tsx file.
You can also edit navigation icon names inside YourScreenName.tsx


## :top: Navigation Drawer Template
This template provides some components and screens with navigation for having a navigation drawer container with 5 pages.
you can change tabs names and contents after installation.
You can use this template by choosing it on boilerplate installation.
this is a preview of Navigation Drawer Template : 

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/drawer.gif" width="100%">
</p>

You can generate a screen with this template using below command :

```
 ignite g container YourScreenName Drawer
```

You can edit file names and contents of files inside YourScreenNameTabs folder, just be sure if you edited the file names you also edit the imports inside YourScreenName.tsx file.
You can also edit navigation icon names inside YourScreenName.tsx

this command will produce a screen file with tab files and will add this screen to AppNavigation file

## :smiley: Social Media Template
This template provides some components and screens with navigation for starting a chat app project. it's also an example of how to start working with this boiler plate.
Inside the template i used farid safi's Gifted Chat for chat screen.
You can use this template by choosing it on boilerplate installation.
this is a preview of Social Media Template : 

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/socialmedia.gif" width="100%">
</p>

## :arrow_down_small: Switchable color scheme 
<p align="center">
   
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/darkmode.gif" width="100%">
</p>
actually below reducer And action playing important roles for settings like direction(rtl/ltr) 
or colorScheme and any settings like these :

```
App/Redux/AppSettingsRedux
```
```
App/Redux/Actions/AppSettinsAction
```

for example for colorScheme we have colorScheme state in this reducer which contans below structure :

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/color-structure.png" width="80%">
 </p>
 
you can also view or change it's structure and values in below file :

`App/Themes/Colors`

this scheme have two states for now dark and light themes

this is how we can change state of this scheme in a redux connected component :

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/color-scheme-usage.png" width="80%">
 </p>

you can see below file for more detail :

`App/Containers/MainTabs/SettingsTab.tsx`

then you can use it as :

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/color-scheme-usage2.png" width="80%">
 </p>
 
you can see similiar usage in example files inside Container folder or another folders ...

you can also test this in the settings tab

## :arrow_down_small: Switchable locale
<p align="center">

<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/locale.gif" width="100%">
</p>

you can change/select locale in a redux connected component this way:

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/i18nchange.png" width="80%">
 </p>

you can create you locales in `App/I18n/locales folder` like :

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/i18n.png" width="80%">
 </p>

then in `App/I18n` folder I18n.ts file :

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/i18nts.png" width="80%">
 </p>

End usage:

 <p align="center">
 <img  src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/i18nusage.png" width="80%">
 </p>
 
## :arrow_down_small: Persisted States (Redux-Persist)
<p align="center">

<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/persist.gif" width="100%">
</p>

for using redux-persist to persist your settings or any states you can go to this path

`App/Config/ReduxPersist.tsx`

then add your reducer name to this array :

`whitelist: ["reducer Name",...],`

then go to your reducer and add this code :

`case REHYDRATE:
      return {...state,...action.payload.yourReducerName};`
            
then changes on your reducer will be persisted 


## :grey_question: How to navigate screens via redux 

Be sure about screen added to the AppNavigation.tsx

Then Your App/Redux/NavigationRedux/NavigationRedux.tsx Should be look like this

```typescript jsx
import AppNavigation from "../../Navigation/AppNavigation";
import { NavigationActions } from 'react-navigation'; //add

export const reducer = (state, action) => {
  let newState;

  switch (action.type) {
        case 'YourScreen'://add
             newState = AppNavigation.router.getStateForAction(//add
             NavigationActions.navigate({//add
               routeName: 'YourScreen',//add
                params:{isDarkMode:action.payload}//add
             }),//add
                state//add
            );//add
        break;//add
    default :
      newState = AppNavigation.router.getStateForAction(action, state);
      break;
  }
  return newState || state;
};

```

Then in a redux connected component you can navigate like this

```typescript jsx
 <SomeButton
        onPress={()=>{
         this.props.YourScreen(this.props.isDarkMode)
        }}
      />
.
.
.
const mapStateToProps = state => ({
  isDarkMode: state.appSettings.isDarkMode,
  nav: state.nav,
  colorScheme: state.appSettings.colorScheme
});

const mapDispatchToProps = dispatch => ({
   YourScreen: (darkMode) => {
     dispatch({ type: 'YourScreen' , payload : darkMode});
   },
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ReduxConnectedComponent));

```

## :nut_and_bolt: Material Ui Collection
  Here you can see a Created by me and some hand picked collection of material components from various ui libraries.
  The goal is making ui development easy and seamless (Ui/ux itself with material design rules and Coding Experience)
  For now, components are in a limited number but i'm working on increasing their number to fulfill all ui/ux needed components
### Material Colors 
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/colors.png" width="50%">
 </p>

  I just converted <a href="https://www.materialui.co/colors"> www.materialui.co/colors </a> colors to an object for easier use of these colors
   
#### Usage :
   ```typescript jsx
       import {MaterialColors} from 'react-native-typescript-material-ui-collection';
        MaterialColors.colorName.CcolorTone
        eg:
        MaterialColors.deepPurple.C400 //returns: #7E57C2 as string
   ```
### Material Vertical Linear 

 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-vertical.png" width="50%">
 </p>
 
this component is a view with default column direction it can be used for better readability of jsx ui code 

#### Usage :

  ```typescript jsx
     import {MaterialHorizontalLinear} from 'react-native-typescript-material-ui-collection';
      <MaterialHorizontalLinear>
      </MaterialHorizontalLinear>
   ```
 ### Material Horizontal Linear 
 
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-horizontal.png" width="50%">
 </p>
  
  this component is a view with default row direction it can be used for better readability of jsx ui code 
  
 #### Usage :
 
   ```typescript jsx
      import {MaterialVerticalLinear} from 'react-native-typescript-material-ui-collection';
       <MaterialVerticalLinear>
       </MaterialVerticalLinear>
   ```    
   
  ### Material Container 
   
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/container.png" width="30%">
 </p>
 
  This component is a full width/height view for container view you can use it for more ui/ux code readability
  
 #### Usage :
  
   ```typescript jsx
       import {MaterialContainer} from 'react-native-typescript-material-ui-collection';
        <MaterialContainer
          isRoot: boolean // if you set this prop true , your component will have no padding and you can render a toolbar view at top of it the default padding is 16
          toolbar:React.ReactNode // this view will render at top of the view if you set isRoot true
        >
            <MaterialContainer
             // if you want to use this inside a root it is still a full width/height view with 16 dp padding
            >
            </MaterialContainer>
        </MaterialContainer>
   ```        
### Material Text Input 
 
 <p align="center">
<img src="https://cloud.githubusercontent.com/assets/2055622/24325711/eaa4ff08-11af-11e7-8550-2504c1580979.gif" alt="example" style="max-width:100%;">
 </p>
this component is basically
<a href="https://github.com/n4kz/react-native-material-textfield" >react-native-material-textfield</a>
i just added it's types to typescript and rtl support (for it's label)

#### Usage :
  ```typescript jsx
     import {MaterialTextInput} from 'react-native-typescript-material-ui-collection';
      <MaterialTextInput
      isRtl={true} //just added this prop you can see other props from above link
      />
   ```    
### Material Progress
<p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialprogress.gif" width="30%">
 </p>
 
 I used <a href="https://github.com/n4kz/react-native-indicators">react-native-indicators</a> code to do this with a few changes and turning the used code to typescript
 I have also used this component for progress inside below button components
 
 #### Usage:
 
 this is exactly the code of above gif
 
 ```typescript jsx
import * as React from 'react'
import {Component} from 'react';
import { View} from 'react-native'
import styles from './Styles/LaunchScreenStyles'
import {MaterialProgress} from 'react-native-typescript-material-ui-collection';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialProgress
          color="purple"
        />
        <MaterialProgress
          color="purple"
          small
        />
      </View>
    )
  }
}

```
#### Props:
 
 ```typescript jsx
  color:string,//just the color
  small?:boolean// using this will render small progress i'ts good for using inside buttons or etc.
```

### Material Buttons       
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialbuttons.gif" width="30%">
  <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/progressbuttons.gif" width="30%">
 </p>
  
  I Made these three buttons exactly based on material.io design guidelines
  
#### Usage:

this is exactly the code of above gif

   ```typescript jsx
   import * as React from 'react'
   import {Component} from 'react';
   import { View} from 'react-native'
   import styles from './Styles/LaunchScreenStyles'
   import {MaterialTextButton,
   MaterialOutlinedButton,
   MaterialContainedButton} from 'react-native-typescript-material-ui-collection';
   
   export default class LaunchScreen extends Component {
     render() {
       return (
         <View style={styles.container}>
           <MaterialTextButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Text Button"
             textColor="purple"
             margin={8}
           />
           <MaterialOutlinedButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Outlined Button"
             textColor="purple"
             margin={8}
           />
           <MaterialContainedButton
             onPress={() => {
               console.log("pressed")
             }}
             color='purple'
             text="Material Contained Button"
             textColor="white"
             margin={8}
           />
           <MaterialTextButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Text Button"
             textColor="purple"
             margin={8}
             iconName="check-circle"
           />
           <MaterialOutlinedButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Outlined Button"
             textColor="purple"
             margin={8}
             iconName="check-circle"
           />
           <MaterialContainedButton
             onPress={() => {
               console.log("pressed")
             }}
             color='purple'
             text="Material Contained Button"
             textColor="white"
             margin={8}
             iconName="check-circle"
           />
         </View>
       )
     }
   }

   ```
#### Props:

##### MaterialTextButton:
```typescript jsx
    text: string,
    icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
    margin?:number,
    textColor?: string,
    textFont?: string,
    iconName?:string, // if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
    onPress?():void,
    progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs
```
##### MaterialOutlinedButton:
```typescript jsx
  text: string,
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  margin?:number,
  textColor?: string,
  textFont?: string,
  onPress?():void,
  iconName?:string, // if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
##### MaterialContainedButton:
```typescript jsx
  text: string,
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  margin?:number,
  color?:string,
  textColor?: string,
  textFont?: string,
  onPress?():void,
  iconName?:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
   
### Material FAB 

 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialfab.gif" width="30%">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/progressfab.gif" width="30%">
 </p>
   I Made these two FABs exactly based on material.io design guidelines

#### Usage :
this is exactly the code of above gif

  ```typescript jsx
     import * as React from 'react'
     import {Component} from 'react';
     import { View} from 'react-native'
     import styles from './Styles/LaunchScreenStyles'
     import {MaterialFab, MaterialExtendedFab} from 'react-native-typescript-material-ui-collection';
     
     export default class LaunchScreen extends Component {
       render() {
         return (
           <View style={styles.container}>
             <MaterialFab 
             mini 
             onPress={()=>{console.log('onpress')}} 
             position="bottomLeft" 
             iconColor="white" 
             iconName='check-circle' color="purple"
             />
             <MaterialFab 
             onPress={()=>{console.log('onpress')}} 
             position="bottomRight" 
             iconColor="white" 
             iconName='check-circle' 
             color="purple"
             />
             <MaterialExtendedFab 
             onPress={()=>{console.log('onpress')}} 
             text="Extended" 
             position="bottom" 
             iconColor="white" 
             iconName='check-circle' 
             color="purple"
             />
           </View>
         )
       }
     }

   ```
#### Props:

##### MaterialFab:
```typescript jsx
      icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
      color?:string,
      iconColor?: string, 
      onPress?():void,
      iconName:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
      mini?:boolean,
      position:string,// one of {'bottomLeft','topRight','topLeft','bottomRight'}
      progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
##### MaterialExtendedFab:
```typescript jsx
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  color?:string,
  iconColor?: string,
  onPress?():void,
  iconName:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  textFont?:string,
  text:string,
  position:string,// one of {'top','bottom'}
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
     
## :heart: Recommended Components For Use In The Project
  ### Mapbox Component
  
  You can install mapbox and link it then use it as below 
    
  and you can get your token key with instructions inside mapbox github https://github.com/mapbox/react-native-mapbox-gl
  
  then you can use it inside `App>Config>MapboxConfig.tsx`
  
 #### then use it like :
  
  ```typescript jsx
  import MapboxGL from '@mapbox/react-native-mapbox-gl';
  import MapboxConfig from "../../Config/MapboxConfig";
  MapboxGL.setAccessToken(MapboxConfig.accessToken);
  ...
  <MapboxGL.MapView
   styleURL={ColorScheme.mapStyleUrl}
   zoomLevel={15}
   centerCoordinate={[51.3890,35.6892]}
   style={{flex:1}}
   >
  </MapboxGL.MapView>
  ```

  ### List Component 

  https://docs.nativebase.io/Components.html#list-avatar-headref


 ### Toggle

https://github.com/xinthink/react-native-material-kit#toggles

 ### CheckBox

https://github.com/xinthink/react-native-material-kit#checkbox

 ### RadioButton

https://github.com/xinthink/react-native-material-kit#radio-button

### MaterialColors

    import {MKColor} from 'react-native-material-kit';

### BottomTabNavigation (See MainTabNavigator.tsx for more info)

    import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

### TopTabNavigation (See ChatsTabNavigator.tsx for more info)

    import {createMaterialTopTabNavigator, TabBarTop} from 'react-navigation-tabs';
### Material input  (installed on the boilerplate)
https://github.com/n4kz/react-native-material-textfield


## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

