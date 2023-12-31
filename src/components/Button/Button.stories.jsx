import Button from "./Button";

export default {
    title: "components/Button",
    component: Button,
    args: {
        children: "Botón"
    }
}

const Template = (args) => {
    return (
        <Button {...args} />
    )
}

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Danger = Template.bind({})

Secondary.args = {
    type: 'secondary'
}

Danger.args = {
    type: 'danger'
}
