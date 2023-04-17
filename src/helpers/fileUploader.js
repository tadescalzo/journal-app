export const fileUploader =async(file)=>{
const cloudURL = 'https://api.cloudinary.com/v1_1/dy5gzbemx/upload';
const formData = new FormData();

if(!file) throw new Error('No hay archivos cargados.')

formData.append('upload_preset','react-journal')
formData.append('file' , file)

try {
    
    const resp = await fetch(cloudURL,{
        method: 'POST',
        body: formData
    })

    if(!resp.ok) throw new Error('No se pudo subir la imagen')

    const cloudResp = await resp.json()

    return cloudResp.secure_url

} catch (error) {

    throw Error(error.message)
}
}