I use BEM convention for styling.

I get used to frameworks to help me with initial setup of environment. It's very new for me to setup all the builds and tools from scratch. When it started to take too much time I framed myself into using the familiar tools to avoid chance of spending too much time.

I know ESLint already supports TypeScript. I use TSLint because I'm familiar with it and I can copy paste it's config from my current project.

I love TDD. I never manually setup the environment to test the HTML. I decided not to try. The tests cover only the independent logic.   

To fulfill the requirement `EmailsEditor component can be possible to use in any other form or app independently.` I treat the title `Share Board name with others` and the buttons not as a part of email input. In real project I would interview the task owner to validate this decision.

I kept lots of hardcoded `px` values. After consultations with the designer, most likely I would add some base sizing value and use it with multiplier. `8px` looks like a good candidate. 

The control has lots of good candidates for the configuration. Eg, placeholder text, block name of BEM class names, public API methods etc. I don't do those because it's not mentioned in the requirement and I don't know the components future.
