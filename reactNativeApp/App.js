import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'

const App = () => {

	const [state, setState] = useState('loading...')

	useEffect(() => {

		fetch('http://10.87.1.72:5000')
			.then(response => response.json())
			.then(json => {
				console.log('Got a response')
				console.log(json)
				setState(json.msg)
			})
			.catch(err => {
				console.log('Got an error')
				console.log(err.toString())
				setState('Error')
			})

	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Response is: {state}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	text: {
		fontSize: 16
	}
})

export default App