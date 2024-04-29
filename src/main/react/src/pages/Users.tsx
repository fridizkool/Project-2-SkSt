import { Button, DatePicker, Fieldset, Form, Grid, GridContainer, Label, Modal, ModalHeading, ModalRef, ModalToggleButton, Select, Table, TextInput } from "@trussworks/react-uswds";
import React from "react";
import { MutableRefObject, useRef } from "react";

export default function Users() {
    const roleOptions = [<option value="ROLE_ADMIN">Admin</option>, <option value="ROLE_USER">User</option>];

    //TODO refactor
    function editModal(user: any, ref: MutableRefObject<ModalRef | null>) {
        return (
            <>
                <Modal ref={ref} id={"modal" + user.id} isLarge>
                    <ModalHeading><h1>Editing {user.username}</h1></ModalHeading>
                    <GridContainer className='usa-section'>
                        <Grid className='flex-justify-center' row>
                            <Grid col={12}>
                                <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                                    <Form onSubmit={() => { }} large>
                                        <Fieldset>
                                            <Label htmlFor={"username" + user.id}>Username</Label>
                                            <TextInput type="text" id={"username" + user.id} name={"username" + user.id} />
                                            <Label htmlFor={"role" + user.id}>Role</Label>
                                            <Select id={"role" + user.id} name={"role" + user.id}>
                                                <React.Fragment key=".0">
                                                    {roleOptions}
                                                </React.Fragment>
                                            </Select>
                                            <Label htmlFor={"address" + user.id}>Address</Label>
                                            <TextInput type="text" id={"address" + user.id} name={"address" + user.id} />
                                            <Label htmlFor={"birthday" + user.id}>Birthday</Label>
                                            <DatePicker id={"birthday" + user.id} name={"birthday" + user.id}></DatePicker>
                                            <Label htmlFor={"social" + user.id}>SSN</Label>
                                            <TextInput type="text" id={"social" + user.id} name={"social" + user.id} disabled></TextInput>
                                            <Label htmlFor={"password" + user.id}>Password</Label>
                                            <TextInput type="text" id={"password" + user.id} name={"password" + user.id}></TextInput>
                                            <Button type="submit">Submit</Button><Button type="button" className="bg-error">Delete</Button>
                                        </Fieldset>
                                    </Form>
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </Modal>
            </>
        )
    }

    //TODO Use a GET request to query admin-accessible Users list from server
    const userData = [
        {
          id: "1",
          username: "user"
        },
        {
          id: "2",
          username: "test"
        }
      ];
      

    return (
        <>
            <GridContainer className='usa-section'>
                <Grid className='flex-justify-center' row>
                    <Grid col={12}>
                        <div className="bg-base-lightest padding-y-3 padding-x-5 border border-base-lighter">
                            <Table striped fullWidth className="bg-primary-lighter">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((user: any) => {
                                        const ref = useRef<ModalRef>(null);
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td><ModalToggleButton modalRef={ref}>Edit</ModalToggleButton></td>
                                                {editModal(user, ref)}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                            <Button type="button">Create user</Button>
                        </div>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}