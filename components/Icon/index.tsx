import React, { useMemo } from 'react'
import TelegramIcon from '@/icons/telegram.svg'
import MailIcon from '@/icons/mail.svg'
import GithubIcon from '@/icons/github.svg'

const iconsMap = {
    'telegram': TelegramIcon,
    'mail': MailIcon,
    'github': GithubIcon,
}

type Props = React.HTMLProps<SVGElement> & {
    name: keyof typeof iconsMap
    size?: string;
}

const Icon: React.FC<Props> = ({ size = '1rem', name, ...rest }) => {
    const IconComponent = useMemo(() => iconsMap[name], [name])

    return (
        <IconComponent width={size} height={size} {...rest} />
    )
}

export default Icon