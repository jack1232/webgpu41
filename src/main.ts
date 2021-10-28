import { LightInputs } from './shaders';
import { CreateShapeWithTexture } from './texture';
import { CubeData } from './vertex_data';
import $ from 'jquery';

const CreateShape = async (li:LightInputs = {}, isAnimation = true) => {
    const data = CubeData();
    await CreateShapeWithTexture(data?.positions, data?.normals, data?.uv1, 'multiple.png','repeat', 'repeat', li, isAnimation);
}

let li:LightInputs = {};
let isAnimation = true;
let ul = 1;
let vl = 1;
CreateShape(li, isAnimation);

$('#id-radio input:radio').on('click', function(){
    let val = $('input[name="options"]:checked').val();
    if(val === 'animation') isAnimation = true;
    else isAnimation = false;
    CreateShape(li, isAnimation);
});

$('#btn-redraw').on('click', function(){
    li.shininess = $('#id-shininess').val()?.toString() as string;  
    CreateShape(li, isAnimation);
});
