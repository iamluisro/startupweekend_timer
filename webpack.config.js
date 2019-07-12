const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
//const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			file: './index.html'
		})
	]
};
