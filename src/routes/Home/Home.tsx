import React, { useCallback, useState } from "react";
import { Center, Title, ModalContent, TwoColumn } from "./elements";
import { Modal, Form, Group, Checkbox, Input } from "../../components";

export const Home: React.VFC = () => {
  const [state, setState] = useState({});

  const handleValidate = useCallback((values) => {
    const errors: Record<string, string> = {};
    if (!values.error) {
      errors.error = `You must accept our not-so-evil conditions!`;
    }
    if (Object.keys(errors).length) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw errors;
    }
  }, []);

  const handleChange = useCallback((values) => {
    setState(values);
  }, []);

  return (
    <>
      <Title>Homepage Content woo!</Title>
      <Center>
        <Modal label="Click Me">
          <ModalContent>
            <TwoColumn>
              <Form
                baseId="checkboxes"
                values={{
                  input: ``,
                  passive: false,
                  active: true,
                  disabled: false,
                  checkboxGroup: [`active`]
                }}
                validateOnBlur
                validateOnChange
                onValidate={handleValidate}
                onChange={handleChange}
              >
                <Input name="input" />
                <Group>
                  <Checkbox name="passive">Passive</Checkbox>
                  <Checkbox name="active">Active</Checkbox>
                  <Checkbox name="error">Error</Checkbox>
                  <Checkbox name="disabled" disabled>
                    Disabled
                  </Checkbox>
                </Group>
                <Group name="checkboxGroup">
                  <Checkbox name="passive" value="passive">
                    Passive
                  </Checkbox>
                  <Checkbox name="active" value="active">
                    Active
                  </Checkbox>
                  <Checkbox name="error" value="error">
                    Error
                  </Checkbox>
                  <Checkbox name="disabled" value="disabled" disabled>
                    Disabled
                  </Checkbox>
                </Group>
              </Form>
              <pre>{JSON.stringify(state, null, 2)}</pre>
            </TwoColumn>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};
