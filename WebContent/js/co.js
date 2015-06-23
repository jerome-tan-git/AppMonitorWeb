/**
 * Created by jetan on 6/10/2015.
 */
function getESResult(_json, _next, _err)
{
    var aj = $.ajax({
        url:'http://localhost:9200/logstash-*/_search?pretty=1 ',// Ìø×ªµ½ action
        data:JSON.stringify(postData),
        type:'post',
        cache:false,
        dataType:'json',
        success:function(data) {
            //console.log(data);
            _next(data);
        },
        error : function() {
            _err();
        }
    });
}



