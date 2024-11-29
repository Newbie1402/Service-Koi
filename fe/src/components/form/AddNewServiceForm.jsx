import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Button, Checkbox, Input, Textarea } from '@nextui-org/react'
import { useFormik } from 'formik'
import serviceApi from '../../apis/service.api'
import Swal from 'sweetalert2'

AddNewServiceForm.propTypes = {
    dataEdit: PropTypes.object,
    isEditMode: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
}

const LoginSchema = Yup.object().shape({
    nameservice: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
    price: Yup.string().required('Required'),
    productcode: Yup.string().required('Required'),
    summary: Yup.string().min(1, 'Too Short!').max(255, 'Too Long!').required('Required'),
    content: Yup.string().min(1, 'Too Short!').max(255, 'Too Long!').required('Required'),
    imagePath: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
})

function AddNewServiceForm({ dataEdit, isEditMode, isOpen, onOpenChange }) {
    const formik = useFormik({
        initialValues: isEditMode
            ? dataEdit
            : {
                  nameservice: '',
                  price: '',
                  productcode: '',
                  summary: '',
                  content: '',
                  status: 'INACTIVE',
                  imagePath: '',
              },
        enableReinitialize: true,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const newService = {
                nameservice: values.nameservice,
                price: values.price,
                productcode: values.productcode,
                summary: values.summary,
                content: values.content,
                status: values.status,
                imagePath: values.imagePath,
            }
            console.log(newService)

            if (!isEditMode) {
                try {
                    const response = await serviceApi.createService(newService)
                    const { status } = response
                    if (status === 201) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Create New Service successfully !!!',
                            confirmButtonText: 'OK',
                        })
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        color: 'error',
                        iconColor: 'error',
                    })
                }
            } else {
                try {
                    const response = await serviceApi.updateService(dataEdit.id, newService)
                    const { status } = response
                    if (status === 200) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Updated successfully !!!',
                            confirmButtonText: 'OK',
                        })
                    }
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        color: 'error',
                        iconColor: 'error',
                    })
                }
            }
        },
    })

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-[1000px]">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={formik.handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">{isEditMode ? `Edit ${dataEdit.nameservice} Service` : 'Add New Service'}</ModalHeader>
                        <ModalBody className="space-y-5">
                            <Input
                                isRequired
                                label="Service Name"
                                name="nameservice"
                                id="nameservice"
                                onChange={formik.handleChange}
                                value={formik.values.nameservice}
                                errorMessage={formik.errors.nameservice}
                                isInvalid={formik.errors.nameservice ? true : false}
                            />
                            <Input
                                isRequired
                                label="Product Code"
                                name="productcode"
                                id="productcode"
                                onChange={formik.handleChange}
                                value={formik.values.productcode}
                                errorMessage={formik.errors.productcode}
                                isInvalid={formik.errors.productcode ? true : false}
                            />
                            <Input
                                isRequired
                                label="Image URL"
                                name="imagePath"
                                id="imagePath"
                                onChange={formik.handleChange}
                                value={formik.values.imagePath}
                                errorMessage={formik.errors.imagePath}
                                isInvalid={formik.errors.imagePath ? true : false}
                            />
                            <Input
                                isRequired
                                type="number"
                                label="Price"
                                name="price"
                                id="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                errorMessage={formik.errors.price}
                                isInvalid={formik.errors.price ? true : false}
                            />
                            <Input
                                isRequired
                                label="Summary"
                                name="summary"
                                id="summary"
                                onChange={formik.handleChange}
                                value={formik.values.summary}
                                errorMessage={formik.errors.summary}
                                isInvalid={formik.errors.summary ? true : false}
                            />
                            <Textarea
                                isRequired
                                label="Content"
                                name="content"
                                id="content"
                                onChange={formik.handleChange}
                                value={formik.values.content}
                                errorMessage={formik.errors.content}
                                isInvalid={formik.errors.content ? true : false}
                            />
                            <div className="flex items-center gap-5">
                                <p>Status:</p>
                                <Checkbox
                                    isSelected={formik.values.status.toLowerCase() === 'active' ? true : false}
                                    onValueChange={(value) => {
                                        return formik.setFieldValue('status', value === true ? 'ACTIVE' : 'INACTIVE')
                                    }}
                                >
                                    {formik.values.status.toLowerCase()}
                                </Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                                onClick={() => {
                                    formik.resetForm()
                                }}
                            >
                                Cancel
                            </Button>
                            <Button color={isEditMode ? 'warning' : 'success'} className="text-white" type="submit">
                                {isEditMode ? 'Update Service' : 'Create New Service'}
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AddNewServiceForm
