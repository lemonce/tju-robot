'use strict';

const path = require('path');
const cwd = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		app: path.resolve(cwd, 'app/index.js'),
	},
	output: {
		path: path.resolve(cwd, 'dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	devServer: {
		contentBase: path.resolve(cwd, 'dist'),
		hot: true,
		port: 1700
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
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
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
				use: {
					loader: 'file-loader',
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
			template: path.resolve(__dirname, '../index.html'),
			inject: 'head'
		}),
		new ExtractTextPlugin('styles.css')
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.runtime.min.js',
		}
	}
};
