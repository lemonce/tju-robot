'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
	loader: 'babel-loader',
	options: {
		presets: [['env', {
			targets: {
				browsers: 'ie 8'
			}
		}]],
		plugins: ['transform-runtime']
	}
};

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../app/index.js'),
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						loaders: {
							js: babelLoader
						}
					}
				}
			},
			{
				test: /\.js$/,
				use: babelLoader,
				exclude:  /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'static/img/[name].[hash:7].[ext]'
					}
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'static/fonts/[name].[hash:7].[ext]'
					}
				},
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'TJU-Robot',
			filename: 'index.html',
			template: path.resolve(__dirname, '../index.html')
		})
	],
	devServer: {
		 contentBase: path.resolve(__dirname, '../dist'),
		 hot: true,
		 port: 1700
	}
}
