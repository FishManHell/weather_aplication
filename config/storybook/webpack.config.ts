import {RuleSetRule, DefinePlugin, Configuration} from "webpack";
import path from "path";
import {styleLoaders} from "../webpack/loaders/styleLoaders";
import {BuildPaths} from "../webpack/types";
import {svgLoaders} from "../webpack/loaders/svgLoader";

export default ({config}: {config: Configuration}) => {
    const {scssLoader} = styleLoaders(true);
    const svgLoader = svgLoaders();

    const {src}: BuildPaths = {
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        html: '',
    }

    config!.resolve!.modules!.unshift(src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules = config!.module!.rules
        ?.filter((rule): rule is RuleSetRule => typeof rule === 'object' && rule !== null)
        .map((rule) => {
            if (rule.test instanceof RegExp && rule.test.test('.svg')) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }
            return rule;
        });

    config!.module!.rules!.push(scssLoader);
    config!.module!.rules!.push(svgLoader);

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __PROJECT__: JSON.stringify('storybook'),
    }))

    return config
}