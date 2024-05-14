import {FC, useState} from "react";
import {Button, Dropdown, MenuProps, Tabs} from "antd";
import {PlusOutlined} from '@ant-design/icons';

export const Home: FC = () => {

    const [tabs, setTabs] = useState<any[]>([
        {
            key: "def",
            label: "Panel_1",
            children: <></>
        }
    ]);
    const items: MenuProps['items'] = [
        {
            label: <a>Editor</a>,
            key: '0',
        },
        {
            label: <a>Image</a>,
            key: '1',
        },
        {
            label: <a>PDF</a>,
            key: '3',
        },
    ];
    const addButton = () => {
        return <Dropdown menu={{items}} trigger={['click']}>
            <Button icon={<PlusOutlined/>} size={"small"} type={"primary"}/>
        </Dropdown>
    }
    return <>
        <Tabs tabBarExtraContent={addButton()} items={tabs}/>
    </>
}