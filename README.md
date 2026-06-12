 # Mi App Final

Este proyecto es una aplicación móvil Expo construida con React Native y React Navigation 7. El foco principal está en la navegación consistente entre una entrada principal (`Home`), pantallas de `Drawer` (`Perfil`, `Configuración`) y pantallas de pestañas adicionales (`Calculadora`, `Scroll con carga`).

## Arquitectura general

- `App.js` es el punto de entrada.
- `NavigationContainer` envuelve toda la navegación con un tema personalizado.
- El root navigator es `DrawerNavigator`.
- Dentro del drawer se incluyen:
  - `MainTabs` → `TabNavigator`
  - `Profile` → `ProfileScreen`
  - `Settings` → `SettingsScreen`

## Navegación

### DrawerNavigator

Archivo: `navigation/DrawerNavigator.js`

- Define el `Drawer.Navigator` principal.
- Muestra `headerShown: true` para las pantallas externas del drawer.
- Usa `headerLeft` para controlar la navegación:
  - Si `canGoBack` es verdadero, muestra la flecha de regresar y llama `navigation.goBack()`.
  - Si no, muestra el icono de hamburguesa y abre el drawer con `navigation.toggleDrawer()`.
- El screen `MainTabs` tiene `headerShown: false` porque su propio `TabNavigator` o stacks hijos gestionan los encabezados.

### TabNavigator

Archivo: `navigation/TabNavigator.js`

- Define el `createBottomTabNavigator()` con tres tab screens:
  - `Home` → `HomeStack`
  - `Calculator` → `CalculatorScreen`
  - `ScrollLoad` → `ScrollLoadingScreen`
- Proporciona icono de menú hamburguesa en el encabezado para las pestañas.
- Usa `tabBarIcon` para renderizar iconos de `Ionicons` en cada pestaña.
- Define estilos de tab bar consistentes con el diseño existente.
- `Home` oculta su encabezado en este nivel (`headerShown: false`) para dejar que `HomeStack` maneje el estilo del stack.

### HomeStack

Archivo: `navigation/HomeStack.js`

- Define un `Stack.Navigator` para la ruta de inicio.
- Incluye dos pantallas:
  - `HomeMain` → `HomeScreen`
  - `Detail` → `DetailScreen`
- Usa un `headerLeft` dinámico:
  - Flecha de regreso si hay historial disponible.
  - Botón de menú hamburguesa en la raíz de la pila para abrir el drawer.
- Mantiene el estilo morado del encabezado y texto blanco para consistencia.

## Pantallas principales

### `HomeScreen`

Archivo: `screens/HomeScreen.js`

- Pantalla principal con acciones rápidas, modal, selector (`Picker`) y navegación a `Detail`.
- Utiliza `SafeAreaView` y `ScrollView` para asegurar compatibilidad con barras de estado y contenido largo.
- Preserva los colores y estilos originales.

### `CalculatorScreen`

Archivo: `screens/CalculatorScreen.js`

- Pantalla de calculadora con validación de entrada numérica.
- Incluye `KeyboardAvoidingView`, `TouchableWithoutFeedback` y manejo de `TextInput` para una experiencia móvil mejorada.
- Mantiene el estilo original de tarjetas, botones y resultado.

### `ScrollLoadingScreen`

Archivo: `screens/ScrollLoadingScreen.js`

- Lista con carga infinita simulada.
- Usa `FlatList` y `contentContainerStyle` para evitar que el contenido quede oculto debajo de la barra de tab.
- Mantiene el aspecto de diseño existente.

### `DetailScreen`

Archivo: `screens/DetailScreen.js`

- Pantalla secundaria con botón `Volver` y `ScrollView`.
- Se integra con `HomeStack` para mostrar la flecha de regreso cuando corresponde.

### `ProfileScreen` y `SettingsScreen`

Archivos:
- `screens/ProfileScreen.js`
- `screens/SettingsScreen.js`

- Son pantallas raíz del drawer.
- Muestran el botón hamburguesa para abrir el drawer.
- Usan `SafeAreaView` y `ScrollView` para mantener compatibilidad con dispositivos Android e iOS.

## Estilos y tema

- El tema principal de navegación está definido en `App.js`.
- Colores globales:
  - Fondo: `#EEF0FF`
  - Encabezado: `#a3a4da`
  - Texto de encabezado: `#FFFFFF`
  - Texto general: `#1F2937`
  - Borde: `#E2E6F0`
- El diseño visual actual se conserva: no se han cambiado paleta, iconos ni estilo de navegación.

## Dependencias clave

- `expo` ~54.0.8
- `react` 19.1.0
- `react-native` 0.81.5
- `@react-navigation/native` ^7.2.5
- `@react-navigation/drawer` ^7.10.3
- `@react-navigation/bottom-tabs` ^7.16.2
- `@react-navigation/stack` ^7.9.3
- `@react-native-picker/picker` 2.11.1
- `react-native-gesture-handler` ~2.28.0
- `react-native-reanimated` ~4.1.1
- `react-native-safe-area-context` ~5.6.0
- `expo-status-bar` ~3.0.9

## Ejecución

Desde la raíz del proyecto:

```bash
npm install
npm start
```

O bien usando los scripts de Expo:

```bash
npm run android
npm run ios
npm run web
```

## Flujo de navegación esperado

- `App.js` carga `DrawerNavigator`.
- `DrawerNavigator` expone tres rutas:
  - `MainTabs` (pestañas + stack de inicio)
  - `Profile` (perfil)
  - `Settings` (configuración)
- Las pantallas raíz siempre muestran el botón de menú hamburguesa.
- Las pantallas con historial muestran una flecha de regreso.
- El usuario nunca queda bloqueado en `Profile` o `Settings`.

## Resumen

Esta aplicación está diseñada para garantizar navegación clara y consistente utilizando:

- Drawer + tabs + stack combinados
- menú hamburguesa accesible en pantalla raíz
- flecha de regreso cuando existe navegación hacia atrás
- compatibilidad con Android e iOS
- preservación del diseño visual actual
