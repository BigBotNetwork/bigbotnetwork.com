import { createElement, custom, img, span } from "@lucsoft/webgen";
import '../../../assets/css/components/opener.css';
import heroImage from '../../../assets/img/hero-img.png';

export function renderOpener() {
    const opener = custom("div", undefined, "opener")
    const shell = custom("div", opener, 'opener-background')
    shell.id = "home";
    const leftSide = createElement('div')
    const mainTitle = span("We represent your interests")
    const subTitle = span("We support you in financing, distributing and marketing your music or video game all over the world.")
    const button = custom('a', "Get started") as HTMLAnchorElement
    button.href = "#services"
    leftSide.append(mainTitle, subTitle, button)
    const image = img(heroImage)
    image.loading = "lazy"
    const rightSide = custom('div', image)
    opener.append(leftSide, rightSide)
    return shell;
}