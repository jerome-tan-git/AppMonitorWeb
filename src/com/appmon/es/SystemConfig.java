package com.appmon.es;

import java.util.HashMap;

public class SystemConfig {
	private static SystemConfig systemConfig;
	private HashMap<String, String> configMap = new HashMap<String, String>();
	public static SystemConfig getInstance()
	{
		if(SystemConfig.systemConfig == null)
		{
			SystemConfig.systemConfig = new SystemConfig();
		}
		return SystemConfig.systemConfig;
	}
	private SystemConfig()
	{
		
	}
	
	public String getConfig(String _key)
	{
		return this.configMap.get(_key);
	}
	
	public void setConfig(String _key, String _value)
	{
		this.configMap.put(_key, _value);
	}
}
