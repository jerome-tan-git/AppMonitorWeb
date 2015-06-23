package com.appmon.es;

import java.io.IOException;
import java.util.Date;

import org.elasticsearch.ElasticsearchException;
import org.elasticsearch.action.admin.indices.status.IndicesStatusResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.cluster.metadata.AliasMetaData;
import org.elasticsearch.common.collect.ImmutableOpenMap;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;

import static org.elasticsearch.common.xcontent.XContentFactory.*;
public class ESConnector {
	public String getGridConfig()
	{
		return null;
	}
	
	public static void main(String[] args) throws ElasticsearchException, IOException
	{
		Client client = new TransportClient()
        .addTransportAddress(new InetSocketTransportAddress("localhost", 9300));
        IndicesStatusResponse response = client.admin().indices().prepareStatus().execute().actionGet();
        for (String index : response.getIndices().keySet()) {
            System.out.println(index);
        }

//		ImmutableOpenMap<String,ImmutableOpenMap<String,AliasMetaData>> response =client.admin().cluster()
//			    .prepareState().execute()
//			    .actionGet().getState()
//			    .getMetaData().aliases(); 
				
				
//				client.prepareSearch("twitter")
//		        .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
//		        .setQuery(QueryBuilders.termQuery("user", "kimchy"))             // Query
////		        .setPostFilter(FilterBuilders.rangeFilter("age").from(12).to(18))   // Filter
//		        .setFrom(0).setSize(60).setExplain(true)
//		        .execute()
//		        .actionGet();
//		System.out.println(response.size());
//		IndexResponse response = client.prepareIndex("twitter", "tweet_1", "2")
//		        .setSource(jsonBuilder()
//		                    .startObject()
//		                        .field("user", "kimchy")
//		                        .field("postDate", new Date())
//		                        .field("message", "trying out Elasticsearch aaa")
//		                    .endObject()
//		                  )
//		        .execute()
//		        .actionGet();
//		System.out.println(response.getIndex());
		client.close();
	}
}
