import {FC, useState} from "react";
import {Button, Dropdown, MenuProps, Tabs} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export const Home: FC = () => {

    const [tabs, setTabs] = useState<any[]>([
        {
            key: "def",
            label: "Panel_1",
            children: <div style={{
                height: "100vh"
            }}><CKEditor config={{

                plugins: [Essentials, Paragraph, Image, ImageToolbar, ImageCaption, ImageStyle, Base64UploadAdapter],
                toolbar: {
                    items: [
                        'undo', 'redo',
                        '|', 'heading',
                        '|', 'bold', 'italic',
                        '|', 'link', 'insertImage', 'insertTable', 'mediaEmbed', 'blockQuote',
                        '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
                    ]
                },
                image: {
                    toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative']
                }
            }} editor={ClassicEditor} data={"czxczxcz"}  onChange={ ( event ) => {
                console.log( event );
            } }></CKEditor></div>
        }
    ]);
    const items: MenuProps['items'] = [
        {
            label: <a>Editor</a>,
            key: 'editor',
        },
        {
            label: <a>Image</a>,
            key: 'image',
        },
        {
            label: <a>PDF</a>,
            key: 'pdf',
        },
    ];
    const addButton = () => {
        return <Dropdown menu={{items}} trigger={['click']}>
            <Button icon={<PlusOutlined/>} size={"small"} type={"primary"}/>
        </Dropdown>
    }
    return <>
        <Tabs style={{
        }} tabBarExtraContent={addButton()} items={tabs}/>
    </>
}