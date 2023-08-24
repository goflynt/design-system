// Libs

// Components
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";

export default {
    title: "Design System/Molecules/Buttons",
    component: Button,
    args: {
        label: "Button",
        iconSize: "m",
        iconPosition: "left",
    },
    parameters: {
        docs: {
            description: {
                component: `
Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

\`\`\`js
import { Button } from "@thc-tools/design-system/molecules/buttons"
\`\`\`
                `,
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
};

export function Types() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(3, 2fr)", gap: "10px " }}>
            <div />
            <div>Primary</div>
            <div>Secondary</div>
            <div>Caution</div>

            <div>Enabled</div>
            <Button type="primary" label="label" />
            <Button type="secondary" label="label" />
            <Button type="caution" label="label" />

            <div>Disabled</div>
            <Button disabled type="primary">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>label 1</div>
                    <div style={{ alignSelf: "flex-end" }}>2</div>
                </div>
            </Button>
            <Button disabled type="secondary" label="label" />
            <Button disabled type="caution" label="button" />
        </div>
    );
}
Types.parameters = {
    controls: { disabled: true },
    docs: {
        description: {
            story: "All button variations",
        },
    },
};

export function WithIcon() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <Button icon="globe" label="LABEL" />
            <Button icon="globe" iconPosition="right" label="LABEL" />
            <Button icon="globe" disabled label="LABEL" />
        </div>
    );
}
WithIcon.parameters = {
    controls: { disabled: true },
    docs: {
        description: {
            story: "Button can be decorated with an Icon before or after the label",
        },
    },
};

export function IconButtons() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 4fr)", gap: "10px " }}>
            <div />
            <div>Primary</div>
            <div>Secondary</div>
            <div>Caution</div>

            <div>Enabled</div>
            <ButtonIcon type="primary" icon="close" />
            <ButtonIcon type="secondary" icon="close" />
            <ButtonIcon type="caution" icon="close" />

            <div>Disabled</div>
            <ButtonIcon disabled type="primary" icon="close" />
            <ButtonIcon disabled type="secondary" icon="close" />
            <ButtonIcon disabled type="caution" icon="close" />
        </div>
    );
}
IconButtons.parameters = {
    controls: { disabled: true },
    docs: {
        description: {
            story: `
\`\`\`js
import { ButtonIcon } from "./components/molecules/buttons"
\`\`\`
`,
        },
    },
};
