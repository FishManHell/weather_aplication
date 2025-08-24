import {BuildOptions} from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {WebpackPluginInstance, HotModuleReplacementPlugin, ProgressPlugin, DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from 'dotenv-webpack';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const {isDev, project, paths: {html: template}} = options

    const definePluginVariables: Record<string, string> = {
        __IS_DEV__: JSON.stringify(isDev),
        __PROJECT__: JSON.stringify(project)
    }

    if (!isDev) {
        Object.assign(definePluginVariables, {
            REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
            REACT_APP_GOOGLE_API_KEY: JSON.stringify(process.env.REACT_APP_GOOGLE_API_KEY)
        })
    }

    const devPlugins = [
        new ReactRefreshWebpackPlugin({
            overlay: false, // leave it here for now
        }),
        new HotModuleReplacementPlugin(),
        new Dotenv({path: "./.env"})
    ]

    const plugins = [
        new HtmlWebpackPlugin({template}),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        new DefinePlugin(definePluginVariables),
    ]

    if (isDev) plugins.push(...devPlugins);

    return plugins
}