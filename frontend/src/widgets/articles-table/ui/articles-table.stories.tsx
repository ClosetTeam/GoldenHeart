import type { Meta, StoryObj } from "@storybook/react-vite";
import ArticlesTable from "./articles-table";
const articles = [
	{
		id: "1",
		title:
			"Сегодня Золотому сердцу 3 года Сегодня Золотому сердцу 3 гСегодня Золотому сердцу 3 г...Сегодня Золотому сердцу 3 г...",
		img: "https://bebiklub-media-dep.s3.amazonaws.com/media/original_images/mainimagesplaceholderplaceholder.original.png",
	},
	{
		id: "2",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://yandex-images.clstorage.net/l96QMU435/bfa68eFB/j7Z-doIL_CoOCxP8U4T6sbiPSL3Tux788_dF0pNyTcf6DccmSoZdYLQp82A9E8P4wdq2qZzinkKkWQdvH6ig1WoiHiLWz4ibu47H3ebEeoHorp1p4qrbXLYm4fdTtm0XCrj3cCkhT2cCnpViylQEjATaA9yYA-8md8qTP_zaVqcPF6xU45r8bcyqAUqRRArxOH-fT-DryO9ExOUl8jZqNZ39koGps91Xkyw3YQh21L3HWLMOSvSeNKcIN50eqCcnD1WuBNO77iwsmnAo4EXYcunP3O2w-xoud0UX98FFWzRPf3JjWqIMNeOfFsDolrVvd7gTbbkl_PSmKxdd7ajHdh32LoUiqn6en_pAqdCk2yL6nbw8YZgYfeaEpNWTBbolDv3xIqiBrHXCHVTjaTWX_2TpgT4ZlW6l91mlT57Z13UM119WgFqMvA9KcPigdhlD27xf__EZyEznhKSFM3fJ5E78oxMLsZ1lQn7H4DlGB18mKXDPaiWON_TaZK8vmCf1nsYv5XEb_F--6QHKQvSqw6v97z2y-LrPJtdX99EWGQRvH7PCWCDM9qHMppP6tMT-xpiBDBkXrlWmCTdvTCg1x7yEj2bjiB1cL5kiihDFiML5jJ6vQdi6fDd0lRcgR-vVjs1i0VmxbAViHkUCi3aEXQWa8b5rVnyWtKgl7E8oF_Zepc9Xg1l9_H6K8PoCBopAW0wsDYDKqF6XZ2QFAEYJ5N-v01KKcd-X8GzG8thm9U7mOoM_WwSvVxVZxFxe6kc1HgXMxaDaL-yfyQALoQX6EejvnDxTmtrfZPdk13JlSjad7SIC-bBdRZAvddH7JQRe5lmgjArkLyWm6fdv7fn1lxz2XMexin-cTAmQGjKUmLO6LWycA5iY33ZHZPeixsmEfu1wMQgw_4cQTKUxGjT038QLc2xbdB2llbuF_y9Ll1cftE_1ETuNbZ3oADvAhZvReUx-vdLrS11E1VXGEfRKU",
	},
	{
		id: "3",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://yastatic.net/naydex/yandex-search/ja9oI3I47/8900b3L7gQ/vGRYdegbSY1QMlBFcbnDwt2huwow_JfuAdX2oC36hiE_GdoNnBEWov8IY1NDayj2dj2BfO5xsfXOQQUTS2GgFKxmSDmuUFXWAXhJEXm6xsDA_PgbLKaTsxuXqv1vpNt5Ox-3M-VibcuIPk8saEZkpyg80WbyM_2cow",
	},
	{
		id: "4",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://avatars.mds.yandex.net/i?id=6d63867ce125a919ab022b107e452c06153ff302-4237647-images-thumbs&n=13",
	},
	{
		id: "5",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
	},
	{
		id: "6",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://yandex-images.clstorage.net/l96QMU435/bfa68eFB/j7Z-doIL_CoOCxP8U4T6sbiPSL3Tux788_dF0pMCPefPfdfGr1NI5TT5U0Bts_M4oa-myYnCW5dhCQcaf63VgAqCOyLGz4ibu04n_cbEeoHorp1p4qrbXLYm4fdTtm0XCrj3cCkhT2cCnpViylQEjATaA9yYA-8md8qTP_zaVqcPF6xU45r8bcyqAUqRRArxOH-fT-DryO9ExOUl8jZqNZ39koGps91Xkyw3YQh21L3HWLMOSvSeNKcIN50eqCcnD1WuBNO77iwsmnAo4EXYcunP3O2w-xoud0UX98FFWzRPf3JjWqIMNeOfFsDolrVvd7gTbbkl_PSmKxdd7ajHdh32LoUiqn6en_pAqdCk2yL6nbw8YZgYfeaEpNWTBbolDv3xIqiBrHXCHVTjaTWX_2TpgT4ZlW6l91mlT57Z13UM119WgFqMvA9KcPigdhlD27xf__EZyEznhKSFM3fJ5E78oxMLsZ1lQn7H4DlGB18mKXDPaiWON_TaZK8vmCf1nsYv5XEb_F--6QHKQvSqw6v97z2y-LrPJtdX99EWGQRvH7PCWCDM9qHMppP6tMT-xpiBDBkXrlWmCTdvTCg1x7yEj2bjiB1cL5kiihDFiML5jJ6vQdi6fDd0lRcgR-vVjs1i0VmxbAViHkUCi3aEXQWa8b5rVnyWtKgl7E8oF_Zepc9Xg1l9_H6K8PoCBopAW0wsDYDKqF6XZ2QFAEYJ5N-v01KKcd-X8GzG8thm9U7mOoM_WwSvVxVZxFxe6kc1HgXMxaDaL-yfyQALoQX6EejvnDxTmtrfZPdk13JlSjad7SIC-bBdRZAvddH7JQRe5lmgjArkLyWm6fdv7fn1lxz2XMexin-cTAmQGjKUmLO6LWycA5iY33ZHZPeixsmEfu1wMQgw_4cQTKUxGjT038QLc2xbdB2llbuF_y9Ll1cftE_1ETuNbZ3oADvAhZvReUx-vdLrS11E1VXGEfRKU",
	},
	{
		id: "7",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://bebiklub-media-dep.s3.amazonaws.com/media/original_images/mainimagesplaceholderplaceholder.original.png",
	},
	{
		id: "8",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		img: "https://avatars.mds.yandex.net/i?id=b6e23fb37522874b527a9ae1294686832df5ad63-4518681-images-thumbs&n=13",
	},
	{
		id: "9",
		title:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
	},
];

const meta: Meta<typeof ArticlesTable> = {
	title: "Widgets/ArticlesTable",
	component: ArticlesTable,
	tags: ["autodocs"],
	argTypes: {
		articles: {
			control: "object",
			description: "Array of articles to display",
		},
		onEdit: { action: "edit" },
		onRemove: { action: "remove" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		articles,
	},
};
