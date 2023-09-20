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