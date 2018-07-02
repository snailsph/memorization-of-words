import React,{Component}from 'react';
import '../style/mao1.css';

class Mao1 extends Component{
    render(){
        return (
            <div className="cat">
                <div className="head_content">
                    <div className="ear_left"></div>
                    <div className="ear_right"></div>
                    <div className="head"></div>
                    <div className="brow_left"></div>
                    <div className="brow_right"></div>
                    <div className="eye_left">
                        <div id="pL" className="pupil"></div>
                    </div>
                    <div className="eye_right">
                        <div id="pR" className="pupil"></div>
                    </div>
                    <div className="beard_left1"></div>
                    <div className="beard_left2"></div>
                    <div className="beard_left3"></div>
                    <div className="beard_right1"></div>
                    <div className="beard_right2"></div>
                    <div className="beard_right3"></div>
                    <div className="nose"></div>
                    <div className="mouse">
                        <div className="mouse_top"></div>
                        <div className="mouse_left"></div>
                        <div className="mouse_right"></div>
                        <div className="mouse_bottom"></div>
                        <div className="mouse_bottom_show"></div>
                        <div className="miao">喵</div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        //获取cat所在div的位置
        var catx=document.querySelector(".cat").offsetLeft;
        var pL=document.getElementById("pL");
        var pR=document.getElementById("pR");
        var r=17;

        document.onmousemove= function(ev) {
            var e = ev ;
            var m=[];
            m.x=e.clientX-catx;  //鼠标坐标能落在左边等位置
            m.y=e.clientY-170;   //head_content、head、eye离上方的距离，使鼠标能落在上方区域
            var s=[];
            s.x=pL.offsetLeft;
            s.y=pL.offsetTop;
            var mosx = Math.abs(m.x - s.x);
            var mosy = Math.abs(m.y - s.y);
            var angle = Math.atan(mosy / mosx);
            var cx = 0, cy = 0;
            if (m.x >= s.x && m.y <= s.y) {
                cx = Math.cos(angle) * r;
                cy = Math.sin(angle) * -r;
        //            console.log("右下");
            }
            if (m.x < s.x && m.y < s.y) {
                cx = Math.cos(angle) * -r;
                cy = Math.sin(angle) * -r;
        //            console.log("左下");
            }
            if (m.x < s.x && m.y > s.y) {
                cx = Math.cos(angle) * -r;
                cy = Math.sin(angle) * r;
        //            console.log("左上");
            }
            if (m.x > s.x && m.y > s.y) {
                cx = Math.cos(angle) * r;
                cy = Math.sin(angle) * r;
        //            console.log("右上");
            }

            if((m.x+catx)>=catx && (m.x+catx)<=(catx+345) && (m.y+170)>=100 && (m.y+170)<=360){
                pL.style.top =15+'px';
                pR.style.top =15+'px';
                pL.style.left =18+'px';
                pR.style.left =18+'px';
            }else{
                pL.style.top = 15+ cy + 'px';
                pR.style.top = 15+ cy + 'px';
                pL.style.left =17+cx + 'px';
                pR.style.left =17+cx + 'px';
            }
        }
    }
}

export default Mao1;