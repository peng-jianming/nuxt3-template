import { IVideoItem } from '~~/assets/api/parenting';

interface IPageConfigItem {
    video_position: number,
    list: IVideoItem[],
    prop: string,
    [propName: string]: any;
}
interface IPageConfig {
    happy_list: IPageConfigItem,
    expert_list: IPageConfigItem,
    method_list: IPageConfigItem,
}

export const pageConfig: IPageConfig = {
    happy_list: {
        prop: 'happy_list',
        video_position: 1,
        title: '“育”教于乐',
        titleBg: '/img/parenting/mobile/under-bg-blue.png',
        videoBgImg: '/img/parenting/mobile/video-bg-red.png',
        videoDialogBg: '/img/parenting/video-play-red.png',
        desc: '“只有品尝到学习的喜悦与快乐后，孩子才会积极主动地去学习。”<br/>小彼恩围绕亲子共读指导、绘本真慧玩、<br class="desktop:hidden"/>阅听悦童谣等品质育儿内容，<br class="desktop:hidden"/>为亲子家庭带来欢乐满满的育儿知识内容，<br/>携手每一个亲子家庭品质成长。',
        list: []
    },
    expert_list: {
        prop: 'expert_list',
        video_position: 2,
        title: '“育”见名家',
        titleBg: '/img/parenting/mobile/under-bg-yellow.png',
        videoBgImg: '/img/parenting/mobile/video-bg-blue.png',
        videoDialogBg: '/img/parenting/video-play-blue.png',
        desc: '在孩子的心田播下一颗国学的种子，<br class="desktop:hidden"/>可以让优秀的国学文化不断滋养孩子的心灵。<br/>小彼恩联合父母必读特邀国学文化教授、学者，<br class="desktop:hidden"/>通过深度访谈的形式，制作了“国学启蒙大咖说”栏目，<br/>为家长们阐释国学启蒙教育的重要意义和方法，<br class="desktop:hidden"/>让更多少年儿童接受到正确有效的国学启蒙教育。',
        list: []
    },
    method_list: {
        prop: 'method_list',
        video_position: 3,
        title: '“育”儿有方',
        titleBg: '/img/parenting/mobile/under-bg-green.png',
        videoBgImg: '/img/parenting/mobile/video-bg-yellow.png',
        videoDialogBg: '/img/parenting/video-play-yellow.png',
        desc: '在养育孩子的过程中，家长总会面临各种各样的挑战与困惑。<br/>如何化解育儿道路上的重重困难，实现科学养育呢？<br/>育儿先育己，小彼恩推出“育”儿有方系列内容，<br class="desktop:hidden"/>陪你和孩子一起成长， 让品质育儿更轻松。',
        list: []
    }
}
