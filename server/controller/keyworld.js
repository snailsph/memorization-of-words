const KeyWorld = require('./../model/keyWorld');

module.exports = {
    //修改 新增保存数据
    async saveKeyworlds(ctx) {
        let { chinaName,englishName,simpleName,remark,sqlName,_id } = ctx.request.body;
        if(!_id){
            const newKeyWorld = new KeyWorld({
                chinaName,
                englishName,
                simpleName,
                remark,
                sqlName
            });
            const doc = await newKeyWorld.save();
            if(!doc.errors){
                ctx.body = {success:true,message:'保存成功',keyWorld:doc}
            }else{
                ctx.body = {success:false,message:'保存失败'} 
            }
        }else{
            let existedKeyWorld = await KeyWorld.findOne({chinaName});
            if(existedKeyWorld && existedKeyWorld._id != _id){
                let msg = "《 "+ chinaName +" 》已存在！";
                ctx.body = { success:false,message:msg} 
                return;
            }
            const doc = await KeyWorld.update({_id:_id},{
                chinaName,
                englishName,
                simpleName,
                remark,
                sqlName
            });
            if(!doc.errors){
                ctx.body = { success:true,message:'修改成功',keyWorld:{
                    _id,
                    chinaName,
                    englishName,
                    simpleName,
                    remark,
                    sqlName
                }}
            }else{
                ctx.body = { success:false,message:'修改失败'} 
            }
        }
    },
    async getKeyWorldByName(ctx) {
        let { chinaName } = ctx.request.body;
        let existedKeyWorld = await KeyWorld.findOne({chinaName});
        if(existedKeyWorld){
            ctx.body = Object.assign({},{
                success: true,
                message: 'success',
            },{keyWorld:existedKeyWorld._doc});
        }else{
            ctx.body = { success:false,message:'fail'} 
        }
    },

    async getKeyWorldList(ctx){
        let { pageSize=10,pageNum=1,chinaName='',type} = ctx.request.body;
        let keyWorldList = [];
        let count = 0;
        if(type && type === 'all'){
            count = await KeyWorld.find().count();
            keyWorldList = await KeyWorld.find();
        }else{
            let reg = new RegExp(chinaName);
            count = await KeyWorld.find({chinaName:reg}).count();
            keyWorldList = await KeyWorld.find({chinaName:reg}).skip(pageSize * (pageNum-1)).limit(pageSize).sort({'_id':-1})
            .exec();
        }
        if(keyWorldList){
            ctx.body = {
                success: true,
                message: 'success',
                keyWorldList,
                pageCount:count,
                page: pageNum
            };
        }else{
            ctx.body = { success:false,message:'fail'} 
        }
    }
        
}